import { SEARCH } from "../constants/action-types";

export function search(term) {
  return { type: SEARCH, term };
}

