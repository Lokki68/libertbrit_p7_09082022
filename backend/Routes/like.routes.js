const router = require('express').Router();

const likeCtrl = require('../Controllers/like.ctrl')

router.get('/:id', likeCtrl.getLikeByPostId);
router.post('/', likeCtrl.createLike);
router.delete('/:id', likeCtrl.deleteLike);

module.exports = router;