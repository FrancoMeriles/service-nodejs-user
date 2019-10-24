/* global it, describe */
const { expect } = require('chai');
const userCtrl = require('../../src/application/controllers/user.controller');

// const usersMock = require('./mock/users.mock');

describe('User controller', () => {
  it('Should return all users', () => {
    const mockReq = {};

    const mockRes = {
      json(obj) {
        return obj;
      },
      status(sta) {
        return sta;
      },
    };

    // Get the result from the controller using mocked values
    const result = userCtrl.getUsers(mockReq, mockRes);

    // Perform the actual test
    // Since this is a list of elements, it should be an array
    expect(result).to.be.an('array');

    // Then we can test one of them to pass the object properties test
    expect(result[0]).to.have.property('age');
  });
});
