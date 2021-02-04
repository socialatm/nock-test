const expect = require('chai').expect;
const updatePost = require('../update').updatePost;

describe('Update Post tests', () => {
  it('Update a post from the database', () => {
    return updatePost()
      .then(response => {
        console.log(response);
        //expect an object back
        expect(typeof response).to.equal('object');
        expect(typeof response._id).to.equal('string');
        //confirm the title and body are correct.
        expect(response.title).to.equal('Updated')
        expect(response.body).to.equal('Why not me again updated')
        // confirm that limt is working.
        expect(response[1]).to.equal(undefined)
      });
  });
});