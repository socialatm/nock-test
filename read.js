/**
 * enter a known values from the database on lines 13 & 14 before running the test.
 * Be sure to enclose them in single quotes
 */

const axios = require('axios');

module.exports = {
  readPost() {
    return axios
      .get(`http://localhost:4000/posts`, {
        params: {
          title: '8.35 pm',
          body: 'Why not me again'
        }
      })
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};