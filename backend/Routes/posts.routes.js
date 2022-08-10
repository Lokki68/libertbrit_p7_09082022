const router = require('express').Router();
const multer = require('../middleWare/multer-config');

const postCtrl = require('../Controllers/post.ctrl');

// C.R.U.D.

router.get('/', postCtrl.getAllPost);
router.get('/:id', postCtrl.getById);
router.get('/user/:id', postCtrl.getByUserId);

router.post('/', multer, postCtrl.createPost);

router.put('/:id', postCtrl.updatePost);

router.delete('/:id', postCtrl.deletePost);

module.exports = router;
