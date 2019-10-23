const fetch = require('node-fetch');

const makeRequest = () => fetch(`${process.env.USER_SERVICE_URL}/users`)
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => console.error(err));

module.exports = makeRequest;
