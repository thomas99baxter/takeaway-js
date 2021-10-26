const {expect} = require('chai')
const Takeaway = require('../lib/Takeaway')

describe('Test', () => {
  it("", () => {
    testTakeaway = new Takeaway();
    expect(testTakeaway.getMenu()).to.be.an.instanceof(Object)
    expect(testTakeaway.getMenu()).to.deep.eq(
      {
        pizzas: { pepperoni: 8, margherita: 6, beef: 7.5 },
        wraps: { chicken: 8, lamb: 3, shish: 5 },
        sides: { salad: 2.2, chips: 2, sauce: 0.8 }
      }
    )
  })
})