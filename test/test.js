/* global describe, it */
var expect = require('chai').expect
var LuckyHappyNumber = require('../src/lucky-happy-number')

describe('Lucky Happy Number Library', function () {
  describe('#getDigitCount()', function () {
    it('Should return 1 when the value is 7', function () {
      expect(LuckyHappyNumber.getDigitCount(7)).to.equal(1)
    })

    it('Should return 2 when the value is 21', function () {
      expect(LuckyHappyNumber.getDigitCount(21)).to.equal(2)
    })
  })

  describe('#getDigit()', function () {
    it('Should return 6 when the values are 654 and 1', function () {
      expect(LuckyHappyNumber.getDigit(654, 1)).to.equal(6)
    })

    it('Should return 5 when the value are 654 and 2', function () {
      expect(LuckyHappyNumber.getDigit(654, 2)).to.equal(5)
    })

    it('Should return 4 when the value are 654 and 3', function () {
      expect(LuckyHappyNumber.getDigit(654, 3)).to.equal(4)
    })
  })

  describe('#isHappy()', function () {
    it('Should return TRUE when the value is 7', function () {
      expect(LuckyHappyNumber.isHappy(7)).to.equal(true)
    })

    it('Should return FALSE when the value is 21', function () {
      expect(LuckyHappyNumber.isHappy(21)).to.equal(false)
    })
  })

  describe('#isLucky()', function () {
    it('Should return TRUE when the value is 7', function () {
      expect(LuckyHappyNumber.isLucky(7)).to.equal(true)
    })

    it('Should return TRUE when the value is 21', function () {
      expect(LuckyHappyNumber.isLucky(21)).to.equal(true)
    })

    it('Should return TRUE when the value is 37', function () {
      expect(LuckyHappyNumber.isLucky(37)).to.equal(true)
    })

    it('Should return FALSE when the value is 5', function () {
      expect(LuckyHappyNumber.isLucky(5)).to.equal(false)
    })

    it('Should return FALSE when the value is 28', function () {
      expect(LuckyHappyNumber.isLucky(28)).to.equal(false)
    })

    it('Should return FALSE when the value is 142', function () {
      expect(LuckyHappyNumber.isLucky(142)).to.equal(false)
    })

    it('Should return FALSE when the value is 100', function () {
      expect(LuckyHappyNumber.isLucky(100)).to.equal(false)
    })
  })
})
