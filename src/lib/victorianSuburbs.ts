import vicPostcodes from "@/data/vic-postcodes.json";
import {
  findSuburbSuggestions,
  normalizeSuburbSelection,
  type PostcodeRecord,
} from "./postcodes";

const victorianPostcodes = vicPostcodes as PostcodeRecord[];

export function findVictorianSuburbSuggestions(query: string, limit = 8) {
  return findSuburbSuggestions(query, victorianPostcodes, limit);
}

export function normalizeVictorianSuburb(value: string) {
  return normalizeSuburbSelection(value, victorianPostcodes);
}
