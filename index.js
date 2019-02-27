var express = require('express')
var app = express()
var nunjucks = require('nunjucks')
var LuckyHappyNumber = require('./lib/lucky-happy-number')

app.locals.title = 'Lucky & Happy Number!'

nunjucks.configure('templates', {
  autoescape: true,
  express: app
})

app.use('/assets', express.static('assets'))

app.get('/lucky-happy/:number', (req, res) => {
  let number = Number(req.params.number)

  res.json({
    value: number,
    isLucky: LuckyHappyNumber.isLucky(number),
    isHappy: LuckyHappyNumber.isHappy(number)
  })
})

app.get('/', (req, res) => {
  res.render('index.html', app.locals)
})

app.listen(8080, () => {
  console.log('App listening on port 8080!')
})

module.exports = app
