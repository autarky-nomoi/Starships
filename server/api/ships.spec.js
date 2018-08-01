const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Ship = db.model('starships')

describe('Ship routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/ships', () => {
    const name = 'DeathStar';
    const model = '1';
    const manufacturer = 'Galactic Empire';
    const price = 1000


    beforeEach(() => {
      return Ship.create({
        name, model, manufacturer, price 
      })
    })

    it('GET /api/ships', async () => {
      const res = await request(app)
        .get('/api/ships')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(name)
      expect(res.body[0].model).to.be.equal(model)
      expect(res.body[0].manufacturer).to.be.equal(manufacturer)
      expect(res.body[0].price).to.be.equal(price)
    })

    it('GET /api/ships/shipId', async () => {
      const res = await request(app)
        .get('/api/ships/1')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.name).to.be.equal(name)
      expect(res.body.model).to.be.equal(model)
      expect(res.body.manufacturer).to.be.equal(manufacturer)
      expect(res.body.price).to.be.equal(price)
    })
  })
  
}) 