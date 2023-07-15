const express = require('express');
const router = express.Router();

const skillsController = require('../app/controllers/SkillController');

// skillsController.index

router.get('/create', skillsController.create);
router.post('/store', skillsController.store);
router.get('/:slug', skillsController.show);

module.exports = router;
