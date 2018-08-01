import axios from 'axios';

const GET_ORDERS = 'GET_ORDERS';
const ADD_ORDER = 'ADD_ORDER';

export const getOrders = orders => ({ type: GET_ORDERS, payload: orders} );

export const addOrder = order => ({ type: ADD_ORDER, payload: order });

export const fetchOrders = (userId) => {
  return async dispatch => {
    const { data } = await axios.get(`/api/orders.${userId}`);
    dispatch(getOrders(data));
  }
}

//should i include userId as a param and end the route at /:userId ??
export const postOrders = (userId, shipId, quantity, price) => {
  return async dispatch => {
    const res = await axios.post(`/api/orders`, {
      userId, shipId, quantity, price
    });
    dispatch(addOrder(res.data));
  }
}


const OrdersReducer = (state = [], action) => {
  switch(action.type) {
    case GET_ORDERS: 
      return action.payload;
    case ADD_ORDER:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default OrdersReducer;