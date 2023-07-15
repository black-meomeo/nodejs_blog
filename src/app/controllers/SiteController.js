const Blog = require('../models/Blog');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // GET
    index(req, res, next) {
        Blog.find({})
            .then((blogs) => {
                res.render('home', {
                    blogs: mutipleMongooseToObject(blogs),
                });
            })
            .catch(next);
    }

    // SEARCH
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
