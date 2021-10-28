class Takeaway {
  constructor() {
    this.menu = {
      "pizzas": [
        { type: 'pepperoni', price: 8.00 },
        { type: 'margherita', price: 6.00 },
        { type: 'beef', price: 7.50 }
      ],
      "wraps": [
        { type: 'chicken', price: 8.00 },
        { type: 'lamb', price: 6.00 },
        { type: 'shish', price: 7.50 }
      ],
      "sides": [
        { type: 'salad', price: 2.20 },
        { type: 'chips', price: 2.00 },
        { type: 'sauce', price: 0.8 }
      ],
    };

    this.userSelection = {}
  }

  getMenu () {
    return this.menu
  }
}

module.exports = Takeaway;