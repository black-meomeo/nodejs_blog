const newRouter = require('./news');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    //   app.get('/new', (req, res) => {
    //     res.render('news');
    //   })

    app.use('/news', newRouter);

    app.get('/search', (req, res) => {
        res.render('search');
    });
}

module.exports = route;
