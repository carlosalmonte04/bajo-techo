const express = require('express')
const app = express()

app.get('/app/*.js', (req, res, next) => {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  next()
})

app.use(express.static(__dirname + '/dist'))

app.listen(process.env.PORT || 3000)