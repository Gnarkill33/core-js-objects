const Selector = require('./selector');

class ClassSelector extends Selector {
  constructor(value) {
    super(`.${value}`);
  }
}

module.exports = ClassSelector;
