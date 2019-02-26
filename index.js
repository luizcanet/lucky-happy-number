var express = require('express')
var app = express()
var LuckyHappyNumber = require('./lib/lucky-happy-number')

app.get('/lucky-happy/:number', (req, res) => {
  let number = Number(req.params.number)

  res.json({
    value: number,
    isLucky: LuckyHappyNumber.isLucky(number),
    isHappy: LuckyHappyNumber.isHappy(number)
  })
})

app.listen(8080, () => {
  console.log('App listening on port 8080!')
})

module.exports = app
