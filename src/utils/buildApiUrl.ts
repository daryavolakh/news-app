import { Filters } from "../constants";

export function buildApiUrl(baseApiUrl: string, category: string | null, keyword: string | null, filters: Filters): string {
  let apiUrl = baseApiUrl;

  if (category) {
    apiUrl += `&category=${category}`;
  }

  if (keyword) {
    apiUrl += `&q=${keyword}`;
  }

  if (filters.category) {
    apiUrl += `&category=${filters.category}`;
  }

  if (filters.date.from) {
    apiUrl += `&from=${filters.date.from}`;
  }

  if (filters.date.to) {
    apiUrl += `&to=${filters.date.to}`;
  }

  return apiUrl;
}
