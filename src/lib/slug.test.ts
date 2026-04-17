import { describe, expect, it } from "vitest";
import { slugify } from "./slug";

describe("slugify", () => {
  it("lowercases and joins words with hyphens", () => {
    expect(slugify("Behind the Screen")).toBe("behind-the-screen");
  });

  it("strips apostrophes rather than converting them to hyphens", () => {
    expect(slugify("How I'm Different")).toBe("how-im-different");
  });

  it("collapses commas and other punctuation into single hyphens", () => {
    expect(slugify("Trucks, Cars, and Code")).toBe("trucks-cars-and-code");
  });

  it("trims leading and trailing hyphens", () => {
    expect(slugify("— Go-To Orders —")).toBe("go-to-orders");
  });

  it("handles hyphen runs without leaving double dashes", () => {
    expect(slugify("Full   Circle   --   Again")).toBe("full-circle-again");
  });
});
