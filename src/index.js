const express = require('express');
const path = require('path');
const morgan = require('morgan');
const engine = require('express-handlebars');
const app = express();
const route = require('./routes');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// template engine
app.engine('handlebars', engine.engine());
    app.set('view        engine', 'handlebars');
   app.set('views', path.join(__dirname, 'resources/views'));

// router init
     route(app);

        app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

