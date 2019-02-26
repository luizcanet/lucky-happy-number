/* global describe, it */
var chai = require('chai')
var chaiHttp = require('chai-http')
var app = require('../index.js')
var expect = chai.expect
var LuckyHappyNumber = require('../lib/lucky-happy-number')

chai.use(chaiHttp)

describe('Lucky Happy Number Library', () => {
  describe('#getDigitCount()', () => {
    it('Expect return 1 when the value is 7', () => {
      expect(LuckyHappyNumber.getDigitCount(7)).to.equal(1)
    })

    it('Expect return 2 when the value is 21', () => {
      expect(LuckyHappyNumber.getDigitCount(21)).to.equal(2)
    })
  })

  describe('#getDigit()', () => {
    it('Expect return 6 when the values are 654 and 1', () => {
      expect(LuckyHappyNumber.getDigit(654, 1)).to.equal(6)
    })

    it('Expect return 5 when the value are 654 and 2', () => {
      expect(LuckyHappyNumber.getDigit(654, 2)).to.equal(5)
    })

    it('Expect return 4 when the value are 654 and 3', () => {
      expect(LuckyHappyNumber.getDigit(654, 3)).to.equal(4)
    })
  })

  describe('#isHappy()', () => {
    it('Expect return TRUE when the value is 7', () => {
      expect(LuckyHappyNumber.isHappy(7)).to.equal(true)
    })

    it('Expect return FALSE when the value is 21', () => {
      expect(LuckyHappyNumber.isHappy(21)).to.equal(false)
    })
  })

  describe('#isLucky()', () => {
    it('Expect return TRUE when the value is 7', () => {
      expect(LuckyHappyNumber.isLucky(7)).to.equal(true)
    })

    it('Expect return TRUE when the value is 21', () => {
      expect(LuckyHappyNumber.isLucky(21)).to.equal(true)
    })

    it('Expect return TRUE when the value is 37', () => {
      expect(LuckyHappyNumber.isLucky(37)).to.equal(true)
    })

    it('Expect return FALSE when the value is 5', () => {
      expect(LuckyHappyNumber.isLucky(5)).to.equal(false)
    })

    it('Expect return FALSE when the value is 28', () => {
      expect(LuckyHappyNumber.isLucky(28)).to.equal(false)
    })

    it('Expect return FALSE when the value is 142', () => {
      expect(LuckyHappyNumber.isLucky(142)).to.equal(false)
    })

    it('Expect return FALSE when the value is 100', () => {
      expect(LuckyHappyNumber.isLucky(100)).to.equal(false)
    })
  })
})

describe('Lucky Happy End Point', () => {
  it('Espect get isLucky equal TRUE and isHappy equal TRUE when number is 7', (done) => {
    chai.request(app).get('/lucky-happy/7').end((err, res) => {
      expect(err).to.equal(null)
      expect(res.body).to.eql({
        value: 7,
        isLucky: true,
        isHappy: true
      })
      done()
    })
  })

  it('Espect get isLucky equal TRUE and isHappy equal FALSE when number is 21', (done) => {
    chai.request(app).get('/lucky-happy/21').end((err, res) => {
      expect(err).to.equal(null)
      expect(res.body).to.eql({
        value: 21,
        isLucky: true,
        isHappy: false
      })
      done()
    })
  })

  it('Espect get isLucky equal FALSE and isHappy equal TRUE when number is 28', (done) => {
    chai.request(app).get('/lucky-happy/28').end((err, res) => {
      expect(err).to.equal(null)
      expect(res.body).to.eql({
        value: 28,
        isLucky: false,
        isHappy: true
      })
      done()
    })
  })

  it('Espect get isLucky equal FALSE and isHappy equal FALSE when number is 142', (done) => {
    chai.request(app).get('/lucky-happy/142').end((err, res) => {
      expect(err).to.equal(null)
      expect(res.body).to.eql({
        value: 142,
        isLucky: false,
        isHappy: false
      })
      done()
    })
  })

  it('Espect get isLucky equal TRUE and isHappy equal FALSE when number is 37', (done) => {
    chai.request(app).get('/lucky-happy/37').end((err, res) => {
      expect(err).to.equal(null)
      expect(res.body).to.eql({
        value: 37,
        isLucky: true,
        isHappy: false
      })
      done()
    })
  })

  it('Espect get isLucky equal FALSE and isHappy equal TRUE when number is 100', (done) => {
    chai.request(app).get('/lucky-happy/100').end((err, res) => {
      expect(err).to.equal(null)
      expect(res.body).to.eql({
        value: 100,
        isLucky: false,
        isHappy: true
      })
      done()
    })
  })
})
