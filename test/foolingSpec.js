const {expect} = require('chai')
const Test = require('../lib/fooling')

describe('Test', () => {
  it('it should give the name back', () => {
    const myTest = new Test("thomas")

    expect(myTest.getName()).to.eq("thomas")
  });
})