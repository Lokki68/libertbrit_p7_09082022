const router = require('express').Router();
const multer = require('../middleWare/multer.user.config');

// Controllers
const userCtrl = require('../Controllers/user.ctrl');
const multerUserConfig = require('../middleWare/multer.user.config');

// R.U.D.
router.get('/', userCtrl.getAllUser);
router.get('/:id', userCtrl.getById);

router.put('/:id', userCtrl.updateUser);

router.delete('/:id', userCtrl.deleteUser);

// Upload Picture

router.put('/upload/:id', multerUserConfig, userCtrl.uploadPicture);


module.exports = router;
