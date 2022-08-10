const fs = require('fs');
const jwt = require('jsonwebtoken');

const db = require('../models');

const Post = db.posts;
const User = db.users;
const Comment = db.comments;
const Like = db.likes;

exports.getAllPost = (req, res, next) => {
  Post.findAll({
    include: [
      {
        model: Comment,
        as: 'comments',
      },
      {
        model: Like,
        as: 'likes',
      },
    ],
    order: [
      ['date', 'DESC'],
      ['comments', 'date', 'DESC'],
    ],
  })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.json({status: 400, err: err.message }));
};

exports.getById = (req, res, next) => {
  const id = req.params.id;

  Post.findByPk(id, {
    include: [
      {
        model: Comment,
        as: 'comments',
      },
      {
        model: Like,
        as: 'likes',
      },
    ],
    order: [['comments', 'date', 'DESC']],
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.json({status: 500, err: err.message }));
};

exports.getByUserId = (req, res) => {
  const id = req.params.id;

  User.findByPk(id, {
    include: [
      {
        model: Post,
        as: 'posts',
        include: [
          {
            model: Comment,
            as: 'comments',
          },
          {
            model: Like,
            as: 'likes',
          },
        ],
      },
    ],
    order: [['posts', 'date', 'DESC']],
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.json({status: 500, err: err.message }));
};

exports.createPost = (req, res, next) => {
  const { userId, message } = req.body;

  const post = {
    userId: userId,
    message: message,
    image: '',
  };

  if (req.file) {
    post.image = `${req.protocol}://${req.get('host')}/postsImage/${req.file.filename}`;
  }

  // Create post

  Post.create(post)
    .then((data) => {
      const msg = `Post Created`;
      res.json({ status: 200, msg, data });
    })
    .catch((err) => res.json({status: 500, err: err.message }));
};

exports.updatePost = (req, res, next) => {

  const { userId, message } = req.body;
  const id = req.params.id;

  Post.findByPk(id)
    .then((post) => {
      if (post.userId === userId) {
        if (!post) return res.json({status: 404, msg: 'No post found' });
        post.message = message;

        post
          .save()
          .then(() => res.json({status: 200, msg: 'post updated', data: post }))
          .catch((err) => res.json({status: 500, err: err.message }));
      } else {
        res.status(404).json({ msg: 'invalid request' });
      }
    })
    .catch((err) => res.json({status: 500, err: err.message }));
};

exports.deletePost = (req, res) => {
  const id = req.params.id;

  Post.findByPk(id)
    .then((post) => {

      const filename = post.image.split('/postsImage/')[1];
      fs.unlink(`postsImage/${filename}`, () => {
      Post.destroy({
        where: { id },
      })
        .then((postDelete) => {
          if (postDelete === 0)
            return res.json({status: 404, msg: 'Not Found' });
          res.json({status: 200, msg: 'Post deleted' });
        })
        .catch((err) => res.json({status: 500, err: err.message }));
      })

    })
    .catch((err) => res.json({status: 500, err: err.message }));
};
