const expect = require('chai').expect;
const readPost = require('../read').readPost;

describe('Read Post tests with get', () => {
  it('Read posts from the database', () => {
    return readPost()
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        expect(typeof response[0]._id).to.equal('string');
        //confirm the title and body are correct.
        expect(response[0].title).to.equal('8.35 pm')
        expect(response[0].body).to.equal('Why not me again')
        // confirm that limt is working.
        expect(response[5]).to.equal(undefined)
      });
  });
});