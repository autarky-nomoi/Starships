const {expect} = require('chai')
const db = require('../index')
const Ship = db.model('starships')

describe('Ship model', () => {
  describe('Validations', () => {

    it('requires name', async () => {
      const ship = Ship.build();

      try {
        await ship.validate()
        throw Error('validation was successful but should have failed without `name`');
      }
      catch (err) {
        expect(err.message).to.contain('name cannot be null');
      }
    });

    it('requires name to not be an empty string', async () => {
      const ship = Ship.build({
        name: ''
      });

      try {
        await ship.validate()
        throw Error('validation was successful but should have failed if name is an empty string');
      } catch (err) {
        expect(err.message).to.contain('Validation error');
        /* handle error */
      }
    });

    it('requires model', async () => {
      const ship = Ship.build();

      try {
        await ship.validate()
        throw Error('validation was successful but should have failed without `model`');
      }
      catch (err) {
        expect(err.message).to.contain('model cannot be null');
      }
    });

    it('requires model to not be an empty string', async () => {
      const ship = Ship.build({
        model: ''
      });

      try {
        await ship.validate()
        throw Error('validation was successful but should have failed if model is an empty string');
      } catch (err) {
        expect(err.message).to.contain('Validation error');
        /* handle error */
      }
    });

    it('requires manufacturer', async () => {
      const ship = Ship.build();

      try {
        await ship.validate()
        throw Error('validation was successful but should have failed without `manufacturer`');
      }
      catch (err) {
        expect(err.message).to.contain('manufacturer cannot be null');
      }
    });

    it('requires manufacturer to not be an empty string', async () => {
      const ship = Ship.build({
        manufacturer: ''
      });

      try {
        await ship.validate()
        throw Error('validation was successful but should have failed if manufacturer is an empty string');
      } catch (err) {
        expect(err.message).to.contain('Validation error');
        /* handle error */
      }
    });
  });
})
