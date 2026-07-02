import assert from "node:assert/strict";
import { test } from "node:test";
import {
  findSuburbSuggestions,
  formatSuburbLabel,
  normalizeSuburbSelection,
  type PostcodeRecord,
} from "../postcodes.ts";

const records: PostcodeRecord[] = [
  {
    category: "Delivery Area",
    postcode: "3030",
    state: "VIC",
    suburb: "COCOROC",
  },
  {
    category: "Delivery Area",
    postcode: "3030",
    state: "VIC",
    suburb: "POINT COOK",
  },
  {
    category: "Delivery Area",
    postcode: "3030",
    state: "VIC",
    suburb: "WERRIBEE",
  },
  {
    category: "Delivery Area",
    postcode: "3030",
    state: "VIC",
    suburb: "WERRIBEE SOUTH",
  },
  {
    category: "Delivery Area",
    postcode: "3000",
    state: "VIC",
    suburb: "MELBOURNE",
  },
  {
    category: "Post Office Boxes",
    postcode: "8001",
    state: "VIC",
    suburb: "MELBOURNE",
  },
];

test("finds Victorian suburbs by postcode", () => {
  const suggestions = findSuburbSuggestions("3030", records);

  assert.deepEqual(
    suggestions.map((suggestion) => suggestion.label),
    [
      "Cocoroc VIC 3030",
      "Point Cook VIC 3030",
      "Werribee VIC 3030",
      "Werribee South VIC 3030",
    ],
  );
});

test("finds Victorian suburbs by partial suburb name", () => {
  const suggestions = findSuburbSuggestions("werri", records);

  assert.deepEqual(
    suggestions.map((suggestion) => suggestion.label),
    ["Werribee VIC 3030", "Werribee South VIC 3030"],
  );
});

test("normalizes a selected suburb label for email output", () => {
  assert.equal(
    normalizeSuburbSelection("werribee vic 3030", records),
    "Werribee VIC 3030",
  );
});

test("keeps ambiguous postcode-only input unchanged", () => {
  assert.equal(normalizeSuburbSelection("3030", records), "3030");
});

test("formats suburbs in title case with state and postcode", () => {
  assert.equal(
    formatSuburbLabel({
      category: "Delivery Area",
      postcode: "3030",
      state: "VIC",
      suburb: "POINT COOK",
    }),
    "Point Cook VIC 3030",
  );
});
