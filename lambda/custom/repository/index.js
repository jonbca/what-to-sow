const YAML = require("yamljs");

class Repository {
  constructor(file = "repository/seeds.yml") {
    this.data = YAML.load(file);
  }

  getSeedsFor(month) {
    return this.data.seeds
      .filter(item => item.outdoors.months[month] !== undefined)
      .map(item => item.name);
  }
}

module.exports = Repository;
