const expect = require('chai').expect;
const createPost = require('../create').createPost;

describe('Create a test post', () => {
  it('Creating a new test Post', () => {
    return createPost()
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        expect(typeof response._id).to.equal('string');

        // Test result of title and body for the response
        expect(response.title).to.equal('8.35 pm')
        expect(response.body).to.equal('Why not me again')
      });
  });
});