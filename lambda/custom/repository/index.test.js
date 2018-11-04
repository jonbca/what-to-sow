const repository = require("./index");

describe("respository can get seeds for a given month", () => {
  it("should get all the seeds for a month", () => {
    const data = repository.loadYamlData();

    expect(data).toHaveProperty("seeds");
  });
});
