import {expect} from 'chai'
import { getShips, getSingleShip, fetchShips, fetchSingleShip } from './ship'
import shipReducer from './ship'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import { createStore } from 'redux';


const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)


const death = { id: 1, name: 'Death Star', Model: 'the first', manufacturer: 'Empire'  };

const fakeShip = {
  name: 'Shippy',
  model: 'number 1',
  manufacturer: 'someone',
  userId: 1
}

const ships = [death, fakeShip];
const singleShip = fakeShip;

const State = {
  ships,
  singleShip
}

describe('Action Creators', ()=> {


  describe('getShips', () => {
      it('returns properly formatted action', () => {
          expect(getShips(ships)).to.deep.equal({
              type: 'GET_SHIPS',
              payload: ships
          });
      });
  });

  // describe('getSingleShip', () => {
  //     it('returns a remove action', () => {
  //         expect(getSingleShip(ships.id)).to.deep.equal({
  //             type: 'GET_SINGLE_SHIP',
  //             ships
  //         });
  //     });
  // });
});

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {
    ships: [fakeShip],
    singleShip: fakeShip,
  }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  xdescribe('fetchShips', () => {
    it('eventually dispatches the GET SHIPS action', async () => {
      mockAxios.onGet('/api/starships').replyOnce(200, ships)
      await store.dispatch(fetchShips())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_SHIPS')
      expect(actions[0].payload).to.be.deep.equal(death)
    })
  })

  xdescribe('fetchSingleShip', () => {
    it('eventually dispatches the GET SINGLE SHIP action', async () => {
      mockAxios.onGet('/api/starships/1').replyOnce(200, death)
      await store.dispatch(fetchSingleShip())
      const actions = store.getActions()
      console.log('ACTIONS', actions)
      expect(actions[1].type).to.be.equal('GET_SINGLE_SHIP')
      expect(actions[1].payload).to.be.deep.equal(death)
    })
  })

})



describe('Reducer', () => {

  it('returns the initial state by default', () => {

    // creates a store (for testing) using your (real) reducer
    const store = createStore(shipReducer)

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