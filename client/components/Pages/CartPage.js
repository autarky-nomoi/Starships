import React from 'react';
import { connect } from 'react-redux';

const CartPage = (props) => {
  return (
    <div>
      <p>Your cart right now</p>
      {Object.keys(props.items).length === 0
        ? <div>Is empty :(</div>
        : (
          <div>
          {Object.keys(props.items).map(productId => {
            const item = props.items[productId];
            return (
              <div key={productId}>
                {item.title} (x{item.quantity})
              </div>
            );
          })}
          <p>Your total: ${(props.total / 100).toFixed(2)}</p>
          </div>
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  let total = 0;
  const items = {};
  state.cart.forEach(product => {
    if (items.hasOwnProperty(product.id)) {
      items[product.id].quantity++;
    } else {
      items[product.id] = product;
      items[product.id].quantity = 1;
    }
    total += product.price;
  });
  return {items, total};
};

const Cart = connect(mapStateToProps, null)(CartPage);

export default Cart;