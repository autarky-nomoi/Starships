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
    const id = 1;
    const userId = '1';
    const starshipId = '5';

    const wishes = [{ id: 1, userId: 1, starshipId: 2 }, { id: 2, userId: 1, starshipId: 5 }]


    beforeEach(() => {
      return Wishlist.create({
      id, userId, starshipId
      })
    })

    xit('GET /api/wishlist', async () => {
      const res = await request(app)
        .get('/api/wishlist')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].userId).to.be.equal(userId)
      expect(res.body[0].model).to.be.equal(starshipId)
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