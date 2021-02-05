/**
 * enter a known Id value from the database on line 16 before running the test.
 * Be sure it's the same Id you entered in findById.js line 13
 * Be sure to enclose them in single quotes
 */
const expect = require('chai').expect;
const readPost = require('../findById').findbyidPost;

describe('Read Post tests with get', () => {
  it('Read posts from the database', () => {
    return readPost()
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        expect(typeof response._id).to.equal('string');
        expect(response._id).to.equal('6018ad203f4b4f477486da0f')
      });
  });
});