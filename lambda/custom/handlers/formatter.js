module.exports = {
  format(values = []) {
    if (values.length < 2) {
      return values.join();
    } else if (values.length === 2) {
      return values.join(" and ");
    } else {
      const vals = Array.from(values);
      const lastItem = vals.pop();

      return vals.join(", ") + `, and ${lastItem}`;
    }
  }
};
