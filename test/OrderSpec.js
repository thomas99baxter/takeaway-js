const {expect} = require('chai');
const Order = require('../lib/Order');
const Takeaway = require('../lib/Takeaway');

describe('Order', () => {

  it("getFullOrder", () => {
    testOrder = new Order();
    expect(testOrder.getFullOrder()).to.be.an.instanceof(Object)
    expect(testOrder.getFullOrder()).to.deep.eq({ items: [], totalCost: 0 })    
  });

  it("getFullOrder", () => {
    testOrder = new Order();
    expect(testOrder.orderPlaced()).to.eq(false)
    testOrder.placeOrder();
    expect(testOrder.orderPlaced()).to.eq(true)
  });

  it("placed", () => {
    testOrder = new Order();
    expect(testOrder.getFullOrder()).to.be.an.instanceof(Object)
    expect(testOrder.getFullOrder()).to.deep.eq({ items: [], totalCost: 0 })    
  });

  it("addToOrder", () => {
    testOrder = new Order();
    testTakeaway = new Takeaway();
    testMenu = testTakeaway.getMenu();

    expect(testOrder.getFullOrder()).to.deep.eq({ items: [], totalCost: 0 });
    testOrder.addToOrder(testMenu, 'pizzas', 'pepperoni')
    expect(testOrder.getFullOrder()).to.deep.eq({ items: [{ type: 'pepperoni', price: 8 }], totalCost: 0 });
  });

  it("setTotalCost", () => {
    testOrder = new Order();
    testTakeaway = new Takeaway();
    testMenu = testTakeaway.getMenu();

    expect(testOrder.getFullOrder()).to.deep.eq({ items: [], totalCost: 0 });
    testOrder.addToOrder(testMenu, 'pizzas', 'pepperoni')
    testOrder.addToOrder(testMenu, 'pizzas', 'beef')

    expect(testOrder.getFullOrder()).to.deep.eq({ items: [
      { type: 'pepperoni', price: 8 }, { type: 'beef', price: 7.5 } 
    ], totalCost: 0 });

    testOrder.setTotalCost();

    expect(testOrder.getFullOrder()).to.deep.eq({ items: [
      { type: 'pepperoni', price: 8 }, { type: 'beef', price: 7.5 } 
    ], totalCost: 15.5 });

    expect(testOrder.getTotalCost()).to.eq(15.5)
  });
});