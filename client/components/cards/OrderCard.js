// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import {putInCart} from '../../store/cart/thunk';
// import { Link } from 'react-router-dom';

// require('./style/CartItems.css');

// class OrderCard extends Component {
//   constructor(props) {
//     super(props);

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render (props) {

//     console.log('ORDERCARD PROPS', props);

    
  
//     //dont have access to this stuff now, either store it in order model or fetch it here with the shipId, might make sense to store it incase items were to theoretically change in the future
//     const ship = props.ship
//     const shipInfo = props.ship.starship
  
//     return (
  
//       <div className='CartItems-container '>
//         <hr />
    
//             <div className='CartItems-pic-info'>
//             <div className='cartitems-picture '>
//                 <img src={shipInfo.imageUrl}/>
//             </div>
//             <div className='caritem-info '>
//             <p>Name: {shipInfo.name}</p>
//             <p>Model: {shipInfo.model}</p>
//             <p>manufacturer: {shipInfo.manufacturer}</p>
//             </div>
//             </div>
  
//             <div className='cartItem-price'> 
//             <p> ${shipInfo.price}</p>
//             </div>

//             <Link to={`/starships/${ship.id}/addreview`}>
//             <button>Write a product review</button>
//             </Link>

//             <hr />
//         </div>
//     )
//   }
// }

// const MapStateToProps = state => {
//   return {
//     user : state.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//   putInCart: (shipId, user) => dispatch(putInCart(shipId, user.id))
//   }
// }

// export default  connect(MapStateToProps, mapDispatchToProps)(OrderCard);