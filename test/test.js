/* global describe, it */
var expect = require('chai').expect
var luckyHappyNumber = require('lucky-happy-number')

describe('Lucky Happy Number Library', function () {
  describe('#isHappy()', function () {
    it('Should return TRUE when the value is 7', function () {
      expect(luckyHappyNumber.isHappy(7)).to.equal(true)
    })

    it('Should return FALSE when the value is 21', function () {
      expect(luckyHappyNumber.isHappy(21)).to.equal(false)
    })
  })

  describe('#isLucky()', function () {
    it('Should return TRUE when the value is 7', function () {
      expect(luckyHappyNumber.isLucky(7)).to.equal(true)
    })

    it('Should return FALSE when the value is 28', function () {
      expect(luckyHappyNumber.isLucky(28)).to.equal(false)
    })
  })
})
