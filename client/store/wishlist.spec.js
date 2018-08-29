import {expect} from 'chai'
import {fetchWishes, addToWishList, addWish, removeWish} from './wishlist'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import Wishlist from '../../server/db/models/wishlist';
const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);
const store = mockStore([]);

describe('action creators', () => {

  const wishListItem = {id: 1, userId: 1, starshipId: 1}

  let mock;
  before(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset();
  })

  after(() => {
    mock.restore();
  })

  it('should allow synchronous creation of ADD_TO_WISH_LIST actions', () => {
    const addToWishListAction = addToWishList(wishListItem);
    expect(addToWishListAction.type).to.equal('ADD_TO_WISH_LIST');
    expect(addToWishListAction.payload).to.eql(wishListItem);
  });

  xit('addWish() returns a thunk to post a new wishItem to the backend and dispatch an ADD_TO_WISH_LIST action', async () => {
    mock.onPost('/api/wishlist').replyOnce(201, wishListItem);

    await store.dispatch(addWish(wishListItem)) //worked as addToWishList
    const actions = store.getActions();
    expect(actions[0].type).to.equal('ADD_TO_WISH_LIST');
    expect(actions[0].payload).to.deep.equal(wishListItem);
    await Wishlist.findById(1)
  });

  xit('removeWish() returns a thunk to delete a wishItem from the backend and dispatch an DELETE_WISH action', async () => {
    mock.onPost('/api/wishlist/1').replyOnce(201, wishListItem);

    await store.dispatch(removeWish(1))
    const actions = store.getActions();
    expect(actions[0].type).to.equal('DELETE_WISH');
    expect(actions[0].payload).to.deep.equal(wishListItem);
    await Wishlist.findById(1)
  });
})

describe('thunk creators', () => {
  let mockAxios

  const fakeWish = {
    userId: 1,
    starshipId: 3
  }

  const initialState = {
    ships: [fakeWish],
    singleShip: fakeWish,
  }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

})



xdescribe('Reducer', () => {

  it('returns the initial state by default', () => {

    // creates a store (for testing) using your (real) reducer

    expect(store.getState().ships).to.be.an('array');
    expect(store.getState().singleShip).to.be.an('object');
  });

  xdescribe('reduces on GET_SHIPS action', () => {

    it('gets the ships on state (without mutating the previous state)', () => {

      const store = createStore(shipReducer)
      const prevState = store.getState();
      console.log('prev', prevState)

      const action = { type: 'GET_SHIPS', fakeShip };
      store.dispatch(action);

      const newState = store.getState();
      console.log('newState', newState)
      console.log('SHIPS', ships)

      // ensures the state is updated properly - deep equality compares the values of two objects' key-value pairs
      expect(store.getState().getShips).to.be.deep.equal(ships);
      // ensures we didn't mutate anything - regular equality compares the location of the object in memory
      expect(newState.getShips).to.not.be.equal(prevState.getShips);

    });

  });

});