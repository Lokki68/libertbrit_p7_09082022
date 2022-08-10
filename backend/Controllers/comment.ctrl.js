const jwt = require('jsonwebtoken');

const db = require('../models');

const Comment = db.comments;

exports.getById = (req, res) => {
  const id = req.params.id;

  Comment.findByPk(id, {})
    .then((comment) => {
      const msg = `Comment Found`;
      res.status(200).json({ msg, data: comment });
    })
    .catch((err) => res.json({status: 400, err: err.message }));
};

exports.createComment = (req, res) => {
  const postId = req.params.postId;
  const { content, userId } = req.body;

  const comment = {
    content,
    userId,
    postId,
  };

  Comment.create(comment)
    .then((data) => {
      const msg = `CommentCreated`;
      res.json({ status: 200, msg, data });
    })
    .catch((err) => res.json({status: 400, err: err.message }));
};

exports.updateComment = (req, res) => {

  const id = req.params.id;
  const { userId, content } = req.body;

  Comment.findByPk(id)
    .then((comment) => {
      if (comment.userId === userId) {
        comment.content = content;

        comment
          .save()
          .then(() => {
            const msg = `Comment Updated`;
            res.json({status: 200, msg, data: comment });
          })
          .catch((err) => res.json({status: 500, err: err.message }));
      } else {
        const msg = 'Bad request';
        res.json({status: 400, err: msg });
      }
    })
    .catch((err) => res.json({status: 500, err: err.message }));
};

exports.deleteComment = (req, res) => {

  const id = req.params.id;

  Comment.findByPk(id)
    .then((comment) => {
        Comment.destroy({
          where: { id },
        })
          .then((ressource) => {
            if (ressource === 0) {
              const msg = 'Comment Not Found';
              res.json({status: 404, msg });
            }
            res.json({status: 200, msg: 'Comment deleted' });
          })
          .catch((err) => res.json({status: 500, err: err.message }));

    })
    .catch((err) => res.json({status: 500, err: err.message }));
};
