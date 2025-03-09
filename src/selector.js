class Selector {
  constructor() {
    this.parts = [];
    this.hasElement = false;
    this.hasId = false;
    this.hasPseudoElement = false;
  }

  element(value) {
    if (this.hasElement) {
      throw new Error(
        'Element, id and pseudo-element should not occur more than one time inside the selector'
      );
    }
    this.parts.push(value);
    this.hasElement = true;
    return this;
  }

  id(value) {
    if (this.hasId) {
      throw new Error(
        'Element, id and pseudo-element should not occur more than one time inside the selector'
      );
    }
    this.parts.push(`#${value}`);
    this.hasId = true;
    return this;
  }

  class(value) {
    this.parts.push(`.${value}`);
    return this;
  }

  attr(value) {
    this.parts.push(`[${value}]`);
    return this;
  }

  pseudoClass(value) {
    this.parts.push(`:${value}`);
    return this;
  }

  pseudoElement(value) {
    if (this.hasPseudoElement) {
      throw new Error(
        'Element, id and pseudo-element should not occur more than one time inside the selector'
      );
    }
    this.parts.push(`::${value}`);
    this.hasPseudoElement = true;
    return this;
  }

  stringify() {
    return this.parts.join('');
  }
}

module.exports = Selector;
