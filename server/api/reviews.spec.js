const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Review = db.model('reviews')

xdescribe('Review routes', () => {
  beforeEach(async () => {
    await db.sync({force: true})
  })

  describe('/api/reviews', () => {
    const content = 'Awesome ship!';
    const rate = 5;
    const userId = 1;


    beforeEach(() => {
      return Review.create({
        content, rate, userId
      })
    })

    it('GET /api/reviews/:id', async () => {
      const res = await request(app)
        .get('/api/reviews/1')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].content).to.be.equal(content)
      expect(res.body[0].rate).to.be.equal(rate)
    })

    // it('POST /api/reviews/1', async () => {
    //   const res = await request(app)
    //     .post('/api/ships/1')
    //     .expect(200)

    //   expect(res.body).to.be.an('object')
    //   expect(res.body.name).to.be.equal(name)
    //   expect(res.body.model).to.be.equal(model)
    //   expect(res.body.manufacturer).to.be.equal(manufacturer)
    //   expect(res.body.price).to.be.equal(price)
    // })
  })
  
}) 