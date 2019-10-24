/* global it, describe */
const { expect } = require('chai');
const getAge = require('../src/domain/util/getAge');

describe('getAge function', () => {
  it('Should return correct age', () => {
    // Get the result from getAge function
    const age = getAge('1983-05-17');
    const result = 36;

    // Perform the actual test
    expect(age).to.be.equal(result);
  });

  it('Should return a incorrect age', () => {
    // Get the result from getAge function
    const age = getAge('1983-05-17');
    const result = 34;

    // Perform the actual test
    expect(age).to.not.equal(result);
  });
});
