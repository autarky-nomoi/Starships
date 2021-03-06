import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
import {putInCart} from '../../store/cart/thunk';
import {me} from '../../store/user';
import {addWish} from '../../store/wishList';
import './style/shipCard.css'

const showLocalStorage = () => {
  let cartObj = {}
  for(var i =0; i < localStorage.length; i++){
    cartObj[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
  }
  return cartObj
}


const button = ship => {
    return (
      <button onClick={()=>{
        let qty =  JSON.parse(localStorage.getItem(ship.id))
        if(qty) {
          localStorage.setItem(ship.id, Number(qty + 1));
        } else {
          localStorage.setItem(ship.id, Number(1));
        }
      }}  className="button button2">Add to cart</button>
    )
}

class ShipCard extends Component {

  addingToCart(shipId){
    this.props.me()
    this.props.putInCart(shipId)
    alert('Added to Cart')
  }

  addingToWishList(shipId){
    this.props.addWish(shipId)
    alert('Added to Wishlist ')
  }


  render() {
    const ship = this.props.ship
    const user = this.props.user
    return (
      <div className='card'>
    <Link to={`/starships/${ship.id}`} >
        <div className='shipName'>
        <h2 className='color'><b>{ship.name}</b></h2>
        </div>

        <div className='img-holder'>
        <img src={ship.imageUrl} />
        </div>

        <div className='ship-info' >
          <h4 className='color'>Model: {ship.model}</h4>
          <h4 className='color'> Price: ${ship.price} </h4>
        </div>
      </Link>

        <div className='ship-info'>
          {(Object.keys(user).length === 0)? button(user, ship)
          :<button onClick={()=>this.addingToCart(ship.id)}  className="button button2">Add to cart</button>}
        </div>

        {this.props.user.id ? <button onClick={()=>this.addingToWishList(ship.id)}  className="button button2">Add to wishlist</button> : null}
        </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    user : state.user,
    isLoggedIn: !!state.user.id
  }

}

const mapDispatchToProps = dispatch =>{
  return {

    putInCart: (shipId) => dispatch(putInCart(shipId)),
    me : ()=> dispatch(me()),
    addWish: (shipId) => dispatch(addWish(shipId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShipCard)
