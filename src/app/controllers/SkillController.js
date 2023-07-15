const Blog = require('../models/Blog');
const { mongoosetoObject } = require('../../util/mongoose');

class SkillController {
    show(req, res, next) {
        Blog.findOne({ slug: req.params.slug })
            .then((blog) => {
                res.render('blogs/show', { blog: mongoosetoObject(blog) });
            })
            .catch(next);
    }

    //    [GET] blogs/create
    create(req, res, next) {
        res.render('blogs/create');
    }
    //    [POST] blogs/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
        const blog = new Blog(formData);
        blog.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new SkillController();
