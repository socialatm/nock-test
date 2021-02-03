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