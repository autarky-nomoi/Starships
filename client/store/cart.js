export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product
});

const cartReducer = (cartState = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...cartState, action.payload];
    default:
      return cartState;
  }
};

export default cartReducer;