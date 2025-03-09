const Selector = require('./selector');

class AttrSelector extends Selector {
  constructor(value) {
    super(`[${value}]`);
  }
}

module.exports = AttrSelector;
