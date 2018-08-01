const router = require('express').Router()
const {Ship, Cart} = require('../db/models')
module.exports = router


//GET all ships
router.get('/', async (req, res, next) => {

  try {
    if(req.user){
      const response = await Cart.findAll({
        include : [{model : Ship}],
        where : {userId : req.user.id}
      });
  
      res.json(response);
    }else{
      res.sendStatus(403)
    }
  } catch (error) { next(error) }
});

//changing quantity
router.put('/:userId', async (req, res, next) => {
  console.log('put route to update quantity' , req.body)
  try {
    await Cart.update({
      quantity: req.body.quantity,
    },
      {
        where: {
          userId: req.params.userId,
          starshipId: req.body.shipId
        }
      }
    )
    res.json('updated')
  } catch (error) { next(error) }
})

router.post('/', async (req,res,next) => {
  try {
    // getting get cart based on userId and shipId
    const usersCart = await Cart.findOne({
      where : {
        userId : req.user.id,
        starshipId : req.body.starshipId
      }
    })
    //Checking if User Already has a cart with the same product
    if (usersCart) {
      // Checking if the starShip is the same     //is this neccessary??? isnt the cart instance we have already filtered by shipId above
      if(usersCart.starshipId === req.body.starshipId) {
        //If it is the same start ship that the user is adding the same ship we just need to add one to quantity
        // do we need the where here??? isnt the cart already specified.
      const response =  await Cart.update({
          quantity : (req.body.quantity ? req.body.quantity : usersCart.quantity + 1)
        },{
          where : {userId: req.user.id, starshipId: req.body.starshipId}
        });
        res.json(response);

      } else {

        //below we have the same code twice sending different name responses ???

      const newShip = await Cart.create({
        quantity : req.body.quantity ? req.body.quantity : 1,
        userId : req.user.id,
        starshipId : req.body.starshipId
      });
        res.json(newShip);
      }
      //If User is adding a new Item we create a new Cart for the item
    } else {

      const response = await Cart.create({
        quantity : (req.body.quantity > 0 ? req.body.quantity : 1),
        userId : req.user.id,
        starshipId : req.body.starshipId
      });
      res.json(response);
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/:shipid', async (req, res, next) => {
  console.log('api side for remove', req.user.id, req.params.shipid)
  try {
    if(req.user){
      console.log('delete server side', req.params.shipid, req.user.id)
      await Cart.destroy({
      where : {
        userId : req.user.id,
        starshipId : req.params.shipid
      }
    });
    res.json('removed')
    }else {
      res.sendStatus(403)
    }

  } catch (error) { next(error) }
});
