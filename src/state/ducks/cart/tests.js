import expect from 'expect.js'
import reducer from './reducers'
import * as types from './types'

const product = {
  id: 1,
  name: 'Test',
  permalink: 'test',
}

/* eslint-disable func-names */
describe('cart reducer', () => {
  describe('add to cart', () => {
    const action = {
      type: types.ADD,
      payload: {
        product,
        quantity: 10,
      },
    }

    context('empty cart', () => {
      const initialState = []

      const result = reducer(initialState, action)

      it('should add the product in the cart', () => {
        expect(result.length).to.be(1)
        expect(result[0].product.id).to.be(product.id)
        expect(result[0].quantity).to.be(10)
      })
    })

    context('cart has one item', () => {
      const initialState = [{
        product: {
          id: 2,
          name: 'Existing product',
        },
        quantity: 4,
      }]

      const result = reducer(initialState, action)

      it('should add the product in the cart', () => {
        expect(result.length).to.be(2)
      })

      it('should add the product in the first position', () => {
        expect(result[0].product.id).to.be(product.id)
        expect(result[0].quantity).to.be(10)
      })
    })

    context('cart has the same product already', () => {
      const initialState = [{
        product: {
          id: 1,
          name: 'Test',
        },
        quantity: 10,
      }]

      const result = reducer(initialState, action)

      it('should not add the same product in the cart', () => {
        expect(result.length).to.be(1)
      })

      it('should increase the quantity', () => {
        expect(result[0].product.id).to.be(product.id)
        expect(result[0].quantity).to.be(20)
      })
    })
  })
})
