const Repository = require("./index");

describe("respository can get seeds for a given month", () => {
  beforeEach(() => {
    this.repo = new Repository("repository/seeds.test.yml");
  });

  it("should load the YAML data", () => {
    expect(this.repo.data).toHaveProperty("seeds");
  });

  it("should fetch seeds by month", () => {
    expect(this.repo.getSeedsFor("november")).toContain("peas");
  });
});
