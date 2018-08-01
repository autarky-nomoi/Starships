import {expect} from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

import { addedToCart, removedFromCart  } from './actionCreator';

describe('Action Creators', ()=> {

  describe('addedToCart', () => {
      it('returns a add action', () => {
          const payload = { id: 1, name: 'Death Star', Model: 'the first', manufacturer: 'Empire'  };
          expect(addedToCart(payload)).to.deep.equal({
              type: 'ADD_TO_CART',
              payload
          });
      });
  });

  describe('removedFromCart', () => {
      it('returns a remove action', () => {
          const payload = 1;
          expect(removedFromCart(payload)).to.deep.equal({
              type: 'REMOVE_FROM_CART',
              payload
          });
      });
  });
});