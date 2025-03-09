const Selector = require('./selector');

class IdSelector extends Selector {
  constructor(value) {
    super(`#${value}`);
  }
}

module.exports = IdSelector;
