const {expect} = require('chai');
const Takeaway = require('../lib/Takeaway');

describe('Takeaway', () => {
  it("getMenu", () => {
    testTakeaway = new Takeaway();
    expect(testTakeaway.getMenu()).to.be.an.instanceof(Object)
    expect(testTakeaway.getMenu()).to.deep.eq(
      {
        pizzas: [
          { type: 'pepperoni', price: 8 },
          { type: 'margherita', price: 6 },
          { type: 'beef', price: 7.5 }
        ],
        wraps: [
          { type: 'chicken', price: 8 },
          { type: 'lamb', price: 6 },
          { type: 'shish', price: 7.5 }
        ],
        sides: [
          { type: 'salad', price: 2.2 },
          { type: 'chips', price: 2 },
          { type: 'sauce', price: 0.8 }
        ]
      }
    )
  });

});