import {expect} from 'chai'
import {fetchShips, fetchSingleShip} from './ship'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const fakeShip = {
    name: 'Shippy',
    model: 'number 1',
    manufacturer: 'someone'
  }

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

  describe('fetchShips', () => {
    it('eventually dispatches the GET SHIPS action', async () => {
      mockAxios.onGet('/api/starships').replyOnce(200, fakeShip)
      await store.dispatch(fetchShips())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_SHIPS')
      expect(actions[0].payload).to.be.deep.equal(fakeShip)
    })
  })

  describe('fetchSingleShip', () => {
    it('eventually dispatches the GET SINGLE SHIP action', async () => {
      mockAxios.onGet('/api/starships/1').replyOnce(200, fakeShip)
      await store.dispatch(fetchSingleShip())
      const actions = store.getActions()
      console.log('ACTIONS', actions)
      expect(actions[1].type).to.be.equal('GET_SINGLE_SHIP')
      expect(actions[1].payload).to.be.deep.equal(fakeShip)
    })
  })

})
