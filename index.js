"use strict";

let { hasOwnProperty } = Object;

let Lozenge = {

  // Public APIs

  of(...supers) {
    let Diamond = function Diamond() {};

    Diamond.__supers__ = supers;

    Diamond.prototype = new Proxy(Diamond.prototype, Lozenge);

    return Diamond;
  },

  // Utils

  getCandidates(receiver) {
    return [ receiver.constructor, ...receiver.constructor.__supers__ ];
  },

  // Traps

  get(receiver, name) {
    for (let candidate of Lozenge.getCandidates(receiver)) {
      if (hasOwnProperty.call(candidate.prototype, name)) {
        return candidate.prototype[ name ];
      }
    }
    return undefined;
  },

  has(receiver, name) {
    for (let candidate of Lozenge.getCandidates(receiver)) {
      if (hasOwnProperty.call(candidate.prototype, name)) {
        return true;
      }
    }
    return false;
  },

  set(receiver, name, value) {
    throw new Error(`Cannot set property ${name} to ${value} on a Lozenge prototype intersection point`);
  }
};

module.exports = Lozenge;
