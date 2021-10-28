const Takeaway = require('./Takeaway')

class Order {
  constructor() {
    this.fullOrder= {
      items: [],
      totalCost: 0.00
    }

    this.placed = false;
  }

  placeOrder () {
    this.placed = true;
  }

  orderPlaced () {
    return this.placed;
  }

  getFullOrder () {
    return this.fullOrder;
  }

  addToOrder(menu, category, selectedItem) {
    if(menu[category]){
      this.fullOrder.items.push(menu[category].filter(
        menuItem => menuItem.type === selectedItem
      )[0]);
    }
  }

  getTotalCost(){
    return this.fullOrder.totalCost;
  }

  setTotalCost() {
    let calculatedTotalCost = 0;
    this.fullOrder.items.forEach((item) => {
      calculatedTotalCost += item.price;
    });
    this.fullOrder.totalCost = calculatedTotalCost;
  }
}

module.exports = Order;