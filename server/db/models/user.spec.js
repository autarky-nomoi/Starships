/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          firstName: 'Cody',
          lastName: 'Pug',
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')


  describe('Validations', () => {

    it('requires email', async () => {
      const user = User.build();

      try {
        await user.validate()
        throw Error('validation was successful but should have failed without `email`');
      }
      catch (err) {
        expect(err.message).to.contain('email cannot be null');
      }
    });

    it('requires firstName to not be between 1 and 250 characters', async () => {
      const user = User.build({
        firstName: ''
      });

      try {
        await user.validate()
        throw Error('validation was successful but should have failed if firstName is not between 1 and 250 characters');
      } catch (err) {
        expect(err.message).to.contain('Validation error');
        /* handle error */
      }
    });

    it('requires lastName to not be between 1 and 250 characters', async () => {
      const user = User.build({
        lastName: ''
      });

      try {
        await user.validate()
        throw Error('validation was successful but should have failed if lastName is not between 1 and 250 characters');
      } catch (err) {
        expect(err.message).to.contain('Validation error');
        /* handle error */
      }
    });

  });

}) // end describe('User model')
