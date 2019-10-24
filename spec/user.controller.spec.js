/* global it, describe */
const { expect } = require('chai');
const request = require('../src/infrastructure/service/userRequest');

// const usersMock = require('./mock/users.mock');

describe('Request User API', () => {
  it('Should return all users from the original API', () => {
    // Get the result from the request of the original API
    request().then((res) => {
      expect(res).to.be.an('array');
    }).catch((err) => err);
  });
});
