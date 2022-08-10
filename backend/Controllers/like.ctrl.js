const db = require('../models');

const Like = db.likes;

exports.getLikeByPostId = (req, res) => {
  const id = req.params.id;

  Like.findByPk(id, {})
    .then((like) => {
      const msg = 'Like found'
      res.json({status: 200, msg, like})
    })
    .catch(err => res.json({status: 400, err: err.message}))
}

exports.createLike = (req, res) => {
  const {postId, userId} = req.body;

  console.log('req',req.body)

  const like = {
    postId,
    userId
  };

  Like.create(like)
    .then((data) => {
      const msg = 'post liked';
      res.json({status: 200, msg, data});
    })
    .catch(err => res.status(400).json({err: err.message}))
};

exports.deleteLike = (req, res) => {

  const {id} = req.params

  console.log('req', req.params)

  Like.findByPk(id)
    .then(() => {
      Like.destroy({
        where: {id},
      })
        .then(() => res.json({status: 200, msg:'like deleted'}))
        .catch(err => res.json({status: 404, msg: err.message}))
    })
    .catch(err => res.json({status: 500, msg: err.message}))
}