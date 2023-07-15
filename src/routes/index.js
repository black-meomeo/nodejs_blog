const newRouter = require('./news');
const siteRouter = require('./site');
const skillsRouter = require('./skills');

function route(app) {
    app.use('/news', newRouter);

    app.use('/:slug', skillsRouter);

    // app.use('/skills/giat-quan-ao', skillsRouter);

    app.use('/', siteRouter);

    app.use('/search', siteRouter);
}

module.exports = route;
