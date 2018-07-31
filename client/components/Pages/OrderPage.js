// import { connect } from 'react-redux';
// import React, { Component } from 'react';
// import OrderCard from '../cards/OrderCard';
// import { getOrders } from '../../store/orders';

// require('./style/CartItems.css');

// class OrderPage extends Component {

//   componentDidMount() {
//     this.props.getOrdersByUser(this.props.user.id);
//   }

//   render() {
    
//     const orders = this.props.orders;
//     // const sortedOrders = orders.sort(order => (order.createdAt - ))
//     const subtotal = orders.reduce((acc, order) => {
//       return acc + (order.price * order.quantity);
//     });

//     return (
//       <div className='cart'>
//       <div className='products'>
//             <h1> Your Order History </h1>

//             <div className='list-item-cal'>
//             <hr />

//             <div className='list-item'>
//             <p>Item</p>
//             </div>

//             <div className='list-price'>
//             <p>Price</p>
//             </div>

//             <div className='list-quantity '>
//             <p>Quantity</p>
//             </div>
//             <hr />

//             <div className='ship-list '>
//             {
//               orders.map((order) => {
//                 return (
//                   <OrderCard userId={this.props.user.id} key={order.id} order={order}/>
//                 )
//               })
//             }
//             </div>



//       </div>
        
//       </div>
//       <div className='total'>
//         <div className='summary'>
//         <h3> Summary ({orders.quantity} Ships) </h3>


//         <div className='container'>
//         <p className='inline-block'> Subtotal </p>
//         <p className='inline-block right'>${subtotal}</p>
//         </div>

//         <div className='container'>
//         <p className='inline-block'> Shipping </p>
//         <p className='inline-block right'>$0</p>
//         </div>


//         <div className='container'>
//         <p className='inline-block'> Est. Taxes </p>
//         <p className='inline-block right'>$0</p>
//         </div>

//         <hr />
//         <div className='container'>
//         <p className='inline-block'><b>Total</b></p>
//         <p className='inline-block right'>${subtotal}</p>
//         </div>

//         <div className='checkout'>
//         <button className="button button2">Checkout</button>
//         </div>
//         </div>
//       </div>
        
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     orders: state.order
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getOrdersByUser: userId => (dispatch(getOrders(userId)))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);