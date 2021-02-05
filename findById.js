/**
 * enter a known Id value from the database on line 13 before running the test.
 * Be sure to enclose it in single quotes
 */

const axios = require('axios');

module.exports = {
  findbyidPost() {
    return axios
      .get(`http://localhost:4000/posts`, {
        params: {
          id: '6018ad203f4b4f477486da0f'
        }
      })
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};