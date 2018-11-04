const YAML = require("yamljs");

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];

function loadYamlData(file = "repository/seeds.yml") {
  return YAML.load(file);
}

module.exports = { loadYamlData };
