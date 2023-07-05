const express = require('express')
const path = require('path')
const morgan = require('morgan')
const engine = require('express-handlebars');
var exphbs  = require('express-handlebars');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

// HTTP logger
app.use(morgan('combined'))

// template engine
app.engine('handlebars', engine.engine());   
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/new', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})