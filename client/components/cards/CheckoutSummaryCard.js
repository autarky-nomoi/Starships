//to be rendered top right of checkout page and on top right of checkout success page

import React from 'react';
import { Link } from 'react-router-dom'
require('../style/cart.css');

const priceChanging = (ships) => {

  let totalCount = 0
  let totalPrice = 0
  ships.forEach((el)=>{
      totalCount += el.quantity
      totalPrice += el.quantity * el.starship.price
  })
  return {
      totalCount,
      totalPrice
  }
}

const SummaryCard = (props) => {

 const result = props.Usercart ? priceChanging(props.Usercart) : {totalCount : 0, totalPrice : 0}
  

  return (
    <div className='total'>
        <div className='summary'>
        <h1 className='center'> Summary ({result.totalCount} Ships) </h1>

        <div className='container'>
        <p className='inline-block'> Subtotal </p>
        <p className='inline-block right'>${result.totalPrice}</p>
        </div>

        <div className='container'>
        <p className='inline-block'> Shipping </p>
        <p className='inline-block right'>$0</p>
        </div>


        <div className='container'>
        <p className='inline-block'> Est. Taxes </p>
        <p className='inline-block right'>$0</p>
        </div>

        <hr />
        <div className='container'>
        <p className='inline-block'><b>Total</b></p>
        <p className='inline-block right'>${result.totalPrice}</p>
        </div>

        <div className='checkout'>
        {!props.isCheckout ? <Link to='/checkout' className="button button2">Checkout</Link> :null }

        </div>
        </div>
      </div>


  )
}

export default SummaryCard;
