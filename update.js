/**
 * enter a known id from the database on line 13 before running the test.
 * Be sure to enclose it in single quotes
 */
const axios = require('axios');

module.exports = {
  updatePost() {
    return axios({
      method: 'post',
      url: 'http://localhost:4000/posts/update',
      data: {
        id: '6018ae37d7826f40542197e5',
        title: 'Updated',
        body: 'Why not me again updated'
      }
    })
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};