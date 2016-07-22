function* entries(obj) {
  for (let prop of Object.keys(obj)) {
    yield [prop, obj[prop]];
  }
}

module.exports = {
  entries: entries
};