import { describe, expect, it } from "vitest";
import { fullYearsSince } from "./date";

describe("fullYearsSince", () => {
  it("returns 0 on the same calendar day", () => {
    const date = new Date(2020, 5, 15);
    expect(fullYearsSince(date, new Date(2020, 5, 15))).toBe(0);
  });

  it("returns the full elapsed years after the anniversary has passed", () => {
    const date = new Date(2020, 0, 1);
    expect(fullYearsSince(date, new Date(2024, 0, 2))).toBe(4);
  });

  it("subtracts a year when today is before the anniversary month", () => {
    const birth = new Date(2000, 6, 15);
    expect(fullYearsSince(birth, new Date(2026, 2, 1))).toBe(25);
  });

  it("subtracts a year when today is in the anniversary month but before the day", () => {
    const birth = new Date(2000, 6, 15);
    expect(fullYearsSince(birth, new Date(2026, 6, 14))).toBe(25);
  });

  it("does not subtract on the exact anniversary day", () => {
    const birth = new Date(2000, 6, 15);
    expect(fullYearsSince(birth, new Date(2026, 6, 15))).toBe(26);
  });

  it("handles leap-day birthdays in non-leap years (treats Feb 29 anniversary as not yet reached on Feb 28)", () => {
    const leapBirth = new Date(2000, 1, 29);
    expect(fullYearsSince(leapBirth, new Date(2025, 1, 28))).toBe(24);
    expect(fullYearsSince(leapBirth, new Date(2025, 2, 1))).toBe(25);
  });
});
