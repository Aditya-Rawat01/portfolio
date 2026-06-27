/**
 * Returns a new array ordered most-recent-first by the date extracted via `getDate`.
 * Missing, undefined, or invalid dates are treated as lowest priority (sorted last).
 * Never throws on any input.
 */
export function sortMostRecentFirst<T>(
  items: T[],
  getDate: (item: T) => string | undefined | null
): T[] {
  return [...items].sort((a, b) => {
    const dateA = parseDate(getDate(a));
    const dateB = parseDate(getDate(b));

    // Both invalid → preserve relative order
    if (dateA === null && dateB === null) return 0;
    // Only A invalid → A goes after B
    if (dateA === null) return 1;
    // Only B invalid → B goes after A
    if (dateB === null) return -1;
    // Both valid → most recent (larger timestamp) first
    return dateB - dateA;
  });
}

/**
 * Parses a date string into a timestamp, returning null for missing or invalid values.
 */
function parseDate(value: string | undefined | null): number | null {
  if (value == null || value === "") return null;
  try {
    const ts = new Date(value).getTime();
    return Number.isNaN(ts) ? null : ts;
  } catch {
    return null;
  }
}
