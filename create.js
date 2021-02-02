const axios = require('axios');

// set your known test values here
module.exports = {
  createPost() {
    return axios({
      method: 'post',
      url: 'http://localhost:4000/posts/add',
      data: {
        title: '8.35 pm',
        body: 'Why not me again'
      }
    })
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};