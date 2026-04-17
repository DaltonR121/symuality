import { describe, expect, it } from "vitest";
import robots from "./robots";

describe("robots", () => {
  it("allows all user agents at root", () => {
    const config = robots();
    const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
    expect(rules[0].userAgent).toBe("*");
    expect(rules[0].allow).toBe("/");
  });

  it("disallows the Keystatic admin surface and the API", () => {
    const config = robots();
    const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
    const disallow = rules[0].disallow;
    const disallowList = Array.isArray(disallow) ? disallow : [disallow];
    expect(disallowList).toContain("/keystatic/");
    expect(disallowList).toContain("/api/");
  });

  it("points crawlers at the sitemap", () => {
    const config = robots();
    expect(config.sitemap).toBe("https://www.symuality.com/sitemap.xml");
  });
});
