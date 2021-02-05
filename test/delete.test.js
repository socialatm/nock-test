/**
 * enter a known Id value from the database on line 16 before running the test.
 * Be sure it's the same Id you entered in delete.js line 13
 * Be sure to enclose it in single quotes
 */
const expect = require('chai').expect;
const readPost = require('../delete').deletePost;

describe('Delete Post test using findByIdAndDelete', () => {
  it('Delete one post from the database', () => {
    return deletePost()
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        expect(typeof response._id).to.equal('string');
        expect(response._id).to.equal('6018ad203f4b4f477486da0f')
      });
  });
});