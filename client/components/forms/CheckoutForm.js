
import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { connect } from 'react-redux';
import { postOrder } from '../../store/orders';
import { getCart } from '../../store/cart/thunk';

//need to import correct thunk from store to get user and then make maptostate and dispatch

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) {
      console.log("Purchase Complete!")
      //need to send userId and items from cart (shipId's, prices, and quantities) to orders db
      //all are available from the cart except the price
      //make an association to include price on the cart
      const userCart = this.props.cart;
      userCart.forEach(item => postOrder(item.userId, item.shipId, item.quantity, item.price));
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart : state.cart.cart,
    user : state.user,
    subtotal : state.cart.subtotal,
    shipCount : state.cart.shipCount
  }
}

mapDispatchToProps = dispatch => {
  return {
    postOrder: (useId, shipId, quantity, price) => (dispatch(postOrder(useId, shipId, quantity, price))),
    getCart : userId => (dispatch(getCart(userId))),
  }
}

//what do i do here???
// export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm)
export default injectStripe(CheckoutForm);

// class CheckoutForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstname : '',
//       lastname : '',
//       address : '',
//       country : '',
//       state: '',
//       zip: ''
//     }

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   //at the moment all of the shipping info isnt defined on user

//   async componentDidMount() {
//     const res = await this.props.fetchUser();
//     const user = res.payload;
//     this.setState({
//       firstname : user.firstName,
//       lastname : user.lastName,
//       address : user.address,
//       country : user.country,
//       state: user.state,
//       zip: user.zip
//     })
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     //process pmt with stripe
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name] : event.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <form onChange={this.handleChange} onSubmit={this.handleSubmit}> 
//         First name:<br />
//         <input type="text" name="firstname" />
//         <br />
//         Last name:<br />
//         <input type="text" name="lastname" />
//         <br />
//         Address:<br />
//         <input type="text" name="address" />
//         <br />
//         Country:<br />
//         <input type="text" name="country" />
//         <br />
//         State:<br />
//         <input type="text" name="state" />
//         <br />
//         Zip Code:<br />
//         <input type="text" name="zip" />
//         <br />
//         <button type='submit' disabled={!this.state.firstName || !this.state.lastName || !this.state.address || !this.state.country || !this.state.state || !this.state.zip}> Submit</button>
//         </form>
//       </div>
//     )
//   }
// }