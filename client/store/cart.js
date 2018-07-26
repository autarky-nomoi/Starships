export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product,quantity) => ({
  type: ADD_TO_CART,
  product,
  quantity
});

const cartReducer = (cartState = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...cartState, [action.product] : action.quantity};
    default:
      return cartState;
  }
};

export default cartReducer;
