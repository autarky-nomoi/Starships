const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Wishlist = db.model('wishlists')

describe('Wishlist routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/wishlist', () => {
    const userId = '1';
    const starshipId = '5';


    beforeEach(() => {
      return Wishlist.create({
        userId, starshipId
      })
    })

    it('GET /api/wishlist', async () => {
      const res = await request(app)
        .get('/api/wishlist')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(userId)
      expect(res.body[0].model).to.be.equal(starshipId)
    })
  })

  
  
  it('POST /api/wishlist')
}) 