import expect from 'expect.js'
import reducer from './reducers'
import * as types from './types'

/* eslint-disable func-names */
describe('session reducer', () => {
  describe('login', () => {
    const action = {
      type: types.LOGIN,
    }

    const initialState = {
      isAuthenticated: false,
      redirectAfterLogin: '/products',
    }

    const result = reducer(initialState, action)

    it('should authenticate the user', () => {
      expect(result.isAuthenticated).to.be(true)
    })

    it('should not change the redirect after login url', () => {
      expect(result.redirectAfterLogin).to.be(initialState.redirectAfterLogin)
    })
  })
})
