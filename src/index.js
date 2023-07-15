const express = require('express');
const path = require('path');
const morgan = require('morgan');
const engine = require('express-handlebars');
const app = express();
const route = require('./routes');
const db = require('./config/db');
const port = 3000;

// connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// template engine
app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// router init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
