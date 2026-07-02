export type PostcodeRecord = {
  category?: string;
  postcode: string;
  state: string;
  suburb: string;
};

export type SuburbSuggestion = {
  label: string;
  postcode: string;
  state: string;
  suburb: string;
};

const MIN_SEARCH_LENGTH = 2;

function normalizeSearch(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function titleCase(value: string) {
  return value
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((word) =>
      word
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("-"),
    )
    .join(" ");
}

function isDeliveryArea(record: PostcodeRecord) {
  return !record.category || record.category === "Delivery Area";
}

function scoreRecord(query: string, record: PostcodeRecord) {
  const normalizedQuery = normalizeSearch(query);
  const digitsOnly = query.replace(/\D/g, "");
  const normalizedSuburb = normalizeSearch(record.suburb);
  const normalizedLabel = normalizeSearch(formatSuburbLabel(record));

  if (digitsOnly.length >= MIN_SEARCH_LENGTH && record.postcode === digitsOnly) {
    return 0;
  }

  if (normalizedSuburb === normalizedQuery) {
    return 1;
  }

  if (
    digitsOnly.length >= MIN_SEARCH_LENGTH &&
    record.postcode.startsWith(digitsOnly)
  ) {
    return 2;
  }

  if (normalizedSuburb.startsWith(normalizedQuery)) {
    return 3;
  }

  if (normalizedLabel.includes(normalizedQuery)) {
    return 4;
  }

  return null;
}

function compareSuburbs(
  firstSuburb: string,
  secondSuburb: string,
  firstLabel: string,
  secondLabel: string,
) {
  if (secondSuburb.startsWith(`${firstSuburb} `)) {
    return -1;
  }

  if (firstSuburb.startsWith(`${secondSuburb} `)) {
    return 1;
  }

  return firstLabel < secondLabel ? -1 : firstLabel > secondLabel ? 1 : 0;
}

export function formatSuburbLabel(record: PostcodeRecord) {
  return `${titleCase(record.suburb)} ${record.state} ${record.postcode}`;
}

export function findSuburbSuggestions(
  query: string,
  records: PostcodeRecord[],
  limit = 8,
): SuburbSuggestion[] {
  const trimmedQuery = query.trim();

  if (trimmedQuery.length < MIN_SEARCH_LENGTH) {
    return [];
  }

  const seen = new Set<string>();

  return records
    .filter(isDeliveryArea)
    .map((record) => ({ record, score: scoreRecord(trimmedQuery, record) }))
    .filter(
      (item): item is { record: PostcodeRecord; score: number } =>
        item.score !== null,
    )
    .sort((first, second) => {
      if (first.score !== second.score) {
        return first.score - second.score;
      }

      const firstLabel = formatSuburbLabel(first.record);
      const secondLabel = formatSuburbLabel(second.record);
      const firstSuburb = titleCase(first.record.suburb);
      const secondSuburb = titleCase(second.record.suburb);

      return compareSuburbs(
        firstSuburb,
        secondSuburb,
        firstLabel,
        secondLabel,
      );
    })
    .filter(({ record }) => {
      const key = `${record.suburb}|${record.state}|${record.postcode}`;

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .slice(0, limit)
    .map(({ record }) => ({
      label: formatSuburbLabel(record),
      postcode: record.postcode,
      state: record.state,
      suburb: titleCase(record.suburb),
    }));
}

export function normalizeSuburbSelection(
  value: string,
  records: PostcodeRecord[],
) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "";
  }

  const normalizedValue = normalizeSearch(trimmedValue);
  const matches = findSuburbSuggestions(trimmedValue, records, records.length);
  const exactLabel = matches.find(
    (match) => normalizeSearch(match.label) === normalizedValue,
  );

  if (exactLabel) {
    return exactLabel.label;
  }

  const exactSuburbMatches = matches.filter(
    (match) => normalizeSearch(match.suburb) === normalizedValue,
  );

  if (exactSuburbMatches.length === 1) {
    return exactSuburbMatches[0].label;
  }

  return trimmedValue;
}
