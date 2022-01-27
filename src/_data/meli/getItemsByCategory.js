const fetch = require('node-fetch');

module.exports = (c) => {
  return fetch(`${process.env.MELI_API_URI}/search?category=${c}`, {
    headers: {
      Accept: 'application/json',
      Authentication: `Bearer ${process.env.MELI_API_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((result) => result.results);
};
