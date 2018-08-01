// import {expect} from 'chai'
// import {fetchWishes, addWish} from './user'
// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'
// import configureMockStore from 'redux-mock-store'
// import thunkMiddleware from 'redux-thunk'
// import history from '../history'

// const middlewares = [thunkMiddleware]
// const mockStore = configureMockStore(middlewares)

// describe('thunk creators', () => {
//   let store
//   let mockAxios

//   const fakeWish = {
//     userId: 1,
//     starshipId: 3
//   }

//   const initialState = {
//     ships: [fakeWish],
//     singleShip: fakeWish,
//   }

//   beforeEach(() => {
//     mockAxios = new MockAdapter(axios)
//     store = mockStore(initialState)
//   })

//   afterEach(() => {
//     mockAxios.restore()
//     store.clearActions()
//   })

//   describe('fetchWishes', () => {
//     it('eventually dispatches the GET WISH LIST action', async () => {
//       mockAxios.onGet('/api/wishlist').replyOnce(200, wishState)
//       await store.dispatch(fetchWishes())
//       const actions = store.getActions()
//       expect(actions[0].type).to.be.equal('GET_WISH_LIST')
//       expect(actions[0].payload).to.be.deep.equal(wishState)
//     })
//   })

//   describe('fetchSingleShip', () => {
//     it('eventually dispatches the GET SINGLE SHIP action', async () => {
//       mockAxios.onGet('/api/starships/1').replyOnce(200, fakeShip)
//       await store.dispatch(fetchSingleShip())
//       const actions = store.getActions()
//       console.log('ACTIONS', actions)
//       expect(actions[1].type).to.be.equal('GET_SINGLE_SHIP')
//       expect(actions[1].payload).to.be.deep.equal(fakeShip)
//     })
//   })

// })