const Blog = require('../models/Blog');
const { mongoosetoObject } = require('../../util/mongoose');

class MeController {
    //    [GET] blogs/create
    storedBlog(req, res, next) {
        res.render('me/stored-blog');
    }
}
module.exports = new MeController();
