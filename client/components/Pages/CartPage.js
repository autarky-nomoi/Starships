import { connect } from 'react-redux';
import React, { Component } from 'react'
import CartItem from '../cards/CartItems'
import { getCart, getSubtotal } from '../../store/cart/thunk'
import CheckoutSummaryCard from '../cards/CheckoutSummaryCard'

require('../style/cart.css')

const showLocalStorage = () => {
  // localStorage.clear();
  console.log('local Storage' )
  let cartObj = {}
  for(var i =0; i < localStorage.length; i++){
    cartObj[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
  }
  return cartObj
 }
 const gettingGuestShip =(objArr,ships) =>{
  console.log('ships',ships )
  const allguestcart =  showLocalStorage()
  let tempship = ships;
  tempship.forEach((ship,index)=>{
    ship.starship = ship
    ship.quantity = allguestcart[ship.id]
    
  })
  let tempObj = Object.keys(objArr)
  console.log(tempObj)

 const result =  tempship.filter((ship,index)=>{
    return tempObj.includes(ship.id + "")
  })
  return(result)
  
 }
 
 const guestSummaryFunc = (ships,guestCart, GuestShip) =>{
  let totalCount = 0;
  let totalPrice = 0;
  
  ships.forEach((ship)=>{
    console.log(typeof ship)
      if(ship.match(/^-?\d+$/)) {
        totalCount += Number(guestCart[ship])
        console.log(guestCart)
        totalPrice += GuestShip[ship - 1].price * Number(guestCart[ship])
      }
  })
  return {
    totalCount,
    totalPrice
  }
 }



class CartPage extends Component {
  constructor(){
    super()
    this.state = {
      result : []
    }
  }

  componentDidMount() {
    if(!this.props.isLoggedIn){
  
      this.props.getCart()
      const allShips = this.props.cart 
      const objArr =  showLocalStorage()
 
     const result = gettingGuestShip(objArr,allShips)
      this.setState({
        result 
      })
     console.log(result)
    }
  }

  render() {
    const Usercart = this.props.cart
    return (
      <div>
    {
      this.props.isLoggedIn ? 
      
      //user 
      <div className='cart'> 
      <div className='products'>
      <h1 className='color center' > Your Cart </h1>
      <div className='list-item-cal'>
            <hr />

            <div className='list-item'>
            <p className='color'>Item</p>
            </div>

            <div className='list-price'>
            <p className='color'>Price</p>
            </div>

            <div className='list-quantity '>
          <p className='color'>Quantity</p>
            </div>

            <div className='ship-list'> 
              {
                Usercart.map((ship,index)=>{
                  return (
                    <CartItem ship={ship} key={index}/>
                  )
                })
              }              
            </div>

      </div>
    </div>
            <div className='summary-card'>
              <CheckoutSummaryCard iaCheckout={true} Usercart={Usercart}/>
            </div>
    </div> 
      
      :
      //guest
      <div className='cart'> 
      <div className='products'>
      <h1 className='color center' > Your Cart </h1>
      <div className='list-item-cal'>
            <hr />

            <div className='list-item'>
            <p className='color'>Item</p>
            </div>

            <div className='list-price'>
            <p className='color'>Price</p>
            </div>

            <div className='list-quantity '>
          <p className='color'>Quantity</p>
            </div>

            <div className='ship-list'> 
              {
                this.state.result.length >= 1 ? 
                this.state.result.map((ship,index)=>{
                  return (
                    <CartItem ship={ship} key={index} />
                  )
                })
                : 
                
                <h1> no result </h1>
              }               
              <h1> List of all guest</h1>
            </div>

      </div>
    </div>
            <div className='summary-card'>
              <CheckoutSummaryCard iaCheckout={true} Usercart={this.state.result}/>

            </div>
    </div> 
      
    }
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ships : state.ship.ships,
    isLoggedIn: !!state.user.id,
    cart: state.cart.cart,
    user: state.user,
    subtotal: state.cart.subtotal,
    shipCount: state.cart.shipCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: userId => (dispatch(getCart(userId))),
    getSubtotal: userCart => (dispatch(getSubtotal(userCart))),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
