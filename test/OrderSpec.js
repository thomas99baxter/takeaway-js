const {expect} = require('chai');
const Order = require('../lib/Order');

describe('Order', () => {

  it("getFullOrder", () => {
    testOrder = new Order();
    expect(testOrder.getFullOrder()).to.be.an.instanceof(Object)
    
  });
});