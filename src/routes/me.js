const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// meController.index

router.get('/stored/blogs', meController.storedBlog);

module.exports = router;
