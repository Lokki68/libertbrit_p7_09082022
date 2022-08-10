const router = require('express').Router();

const adminCtrl = require('../Controllers/admin.ctrl');

router.get('/', adminCtrl.getAll);

router.post('/:id', adminCtrl.passAdmin);

router.delete('/:id', adminCtrl.deleteAdmin);

module.exports = router;
