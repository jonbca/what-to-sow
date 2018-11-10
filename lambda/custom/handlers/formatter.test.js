const { format } = require("./formatter");

describe("formatting the response", () => {
  it("should format a list with one element", () => {
    expect(format(["apples"])).toBe("apples");
  });

  it("should format a list with no elements", () => {
    expect(format([])).toBe("");
  });

  it("should format a list with multiple elements", () => {
    expect(format(["apples", "pears", "cherries"])).toBe(
      "apples, pears, and cherries"
    );
  });

  it("should format a list with two elements and just 'and'", () => {
    expect(format(["apples", "pears"])).toBe("apples and pears");
  });
});
