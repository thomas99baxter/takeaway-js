class Takeaway {
  constructor() {
    this.menu = {
      "pizzas": {
        "pepperoni": 8.00, "margherita": 6.00, "beef": 7.50 
      },
      "wraps": {
        "chicken": 8.00, "lamb": 3.00, "shish": 5.00 
      },
      "sides": {
        "salad": 2.20, "chips": 2.00, "sauce": 0.80 
      }
    };
  }

  getMenu () {
    return this.menu
  }
}

module.exports = Takeaway;