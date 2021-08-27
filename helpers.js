
exports.sample = items => (items[Math.floor(Math.random() * items.length)]);

exports.rndInt = (a, b) => Math.floor(Math.random() * b) + a;

exports.delay = millis => new Promise((resolve) => {
  setTimeout(_ => resolve(), millis)
});