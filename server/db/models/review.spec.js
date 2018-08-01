const {expect} = require('chai')
const db = require('../index')
const Review = db.model('reviews')

describe('Review model', () => {
  describe('Validations', () => {

    it('requires content', async () => {
      const review = Review.build();

      try {
        await review.validate()
        throw Error('validation was successful but should have failed without `content`');
      }
      catch (err) {
        expect(err.message).to.contain('content cannot be null');
      }
    });

    it('requires rate', async () => {
      const review = Review.build();

      try {
        await review.validate()
        throw Error('validation was successful but should have failed without `rate`');
      }
      catch (err) {
        expect(err.message).to.contain('rate cannot be null');
      }
    });

    it('requires rate to not be an integer between 0 and 5', async () => {
      const review = Review.build({
        rate: 8
      });

      try {
        await review.validate()
        throw Error('validation was successful but should have failed if rate is not between 0 and 5');
      } catch (err) {
        expect(err.message).to.contain('Validation error');
        /* handle error */
      }
    });

  });
})