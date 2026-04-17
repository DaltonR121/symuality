/**
 * Return the number of full years elapsed between `date` and `now` (defaulting
 * to the current wall clock). Correctly handles the case where this year's
 * anniversary has not yet occurred, so the result is identical to how a
 * person would compute their age in years.
 *
 * @param date - The anchor date (e.g. a birthday or anniversary).
 * @param now - Optional reference for "today", primarily for tests.
 */
export function fullYearsSince(date: Date, now: Date = new Date()): number {
  let years = now.getFullYear() - date.getFullYear();
  const monthDiff = now.getMonth() - date.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < date.getDate())) {
    years--;
  }
  return years;
}
