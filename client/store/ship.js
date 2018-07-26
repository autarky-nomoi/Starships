import axios from 'axios';

const GET_SHIPS = 'GET_SHIPS';
const GET_SINGLE_SHIP = 'GET_SINGLE_SHIP';
const DELETE_SHIP = 'DELETE_SHIP';

//action creators
export const getShips = ships => ({type: GET_SHIPS, payload: ships });
export const deleteShip = Ship => ({ type: DELETE_SHIP, payload: Ship });
export const getSingleShip = singleShip => ({ type: GET_SINGLE_SHIP, payload: singleShip });

//thunk creator
export const fetchShips = () => {
  return async dispatch => {
  const res = await axios.get('/api/ship');
  dispatch(getShips(res.data));
  }
}

export const fetchSingleShip = ShipId => {
  return async dispatch => {
    const res = await axios.get(`/api/Ship/${ShipId}`);
    dispatch(getSingleShip(res.data));
  }
}

