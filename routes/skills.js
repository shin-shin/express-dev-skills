var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/:id/new', skillsCtrl.new);
router.post('/:id/new', skillsCtrl.create)
router.get('/:id/edit/:idx', skillsCtrl.edit);
router.put('/:id/edit/:idx', skillsCtrl.update);
router.get('/:id/delete/:idx', skillsCtrl.delete);
router.get('/:id', skillsCtrl.show);

module.exports = router;
