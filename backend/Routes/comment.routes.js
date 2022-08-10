const router = require('express').Router();

const commentCtrl = require('../Controllers/comment.ctrl');

router.get('/:id', commentCtrl.getById);

router.post('/:postId', commentCtrl.createComment);

router.put('/:id', commentCtrl.updateComment);

router.delete('/:id', commentCtrl.deleteComment);

module.exports = router;
