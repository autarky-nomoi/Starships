const router = require('express').Router()
const {Ship, Cart, OrderLine} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const order = await OrderLine.findAll({
      where: {
        userId: req.params.userId
      }
    });
    res.json(order);
  } catch (error) { next (error) }
});

router.post('/', async (req, res, next) => {
  try {
    await OrderLine.create(req.body);
    res.sendStatus(201);
  } catch (error) { next (error) }
});