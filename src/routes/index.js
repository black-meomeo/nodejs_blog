const newRouter = require('./news');
const siteRouter = require('./site');
const skillsRouter = require('./skills');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newRouter);

    app.use('/:slug', skillsRouter);

    app.use('/me', meRouter);

    app.use('/', siteRouter);

    app.use('/search', siteRouter);
}

module.exports = route;
