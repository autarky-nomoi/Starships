const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Cart = db.model('carts')

describe('Wishlist routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  xdescribe('/api/carts', () => {
    const userId = '1';
    const starshipId = '5';
    const quantity = 1;


    beforeEach(() => {
      return Cart.create({
      userId, starshipId, quantity
      })
    })

    xit('GET /api/cart', async () => {
      const res = await request(app)
        .get('/api/cart')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.starshipId).to.be.equal(starshipId)
      expect(res.body.quantity).to.be.equal(quantity)
    })

    xit('POST /api/wishlist', async () => {
      const res = await request(app)
        .post('/api/wishlist')
        .expect(200)
      console.log('resBODY', res.body)
      expect(res.body).to.be.an('object')
      expect(res.body.userId).to.be.equal(userId)
      expect(res.body.starshipId).to.be.equal(starshipId)
    })
  })

  
}) 