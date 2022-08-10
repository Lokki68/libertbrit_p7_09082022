const router = require('express').Router();

//Controllers

const authCtrl = require('../Controllers/auth.ctrl');
const auth = require('../middleWare/auth');

// Auth
router.post('/checkToken', authCtrl.verifToken);

router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);

module.exports = router;
