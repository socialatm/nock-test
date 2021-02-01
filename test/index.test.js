const expect = require('chai').expect;
const getUser = require('../index').getUser;

describe('Get User tests', () => {
  it('Get a user by username', () => {
    return getUser('socialatm')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of name, company and location for the response
        expect(response.name).to.equal('Ray')
        expect(response.company).to.equal('Team Iris Music')
        expect(response.location).to.equal('Maine, USA')
        // console.log(response.company);
      });
  });
});