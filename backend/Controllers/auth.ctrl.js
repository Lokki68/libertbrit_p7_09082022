const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passwordValidator = require('password-validator');

const db = require('../models');

const User = db.users;

const schemaValidPassword = new passwordValidator();

schemaValidPassword
  .is()
  .min(5) // min length is 5 characters
  .is()
  .max(50) // max length is 50 characters
  .has()
  .uppercase() // uppercase
  .has()
  .lowercase() // lowercase
  .has()
  .digits(2) // 2 digits
  .has()
  .not()
  .spaces(); // not spaces

const maxAge = 3 * 24 * 60 * 60 * 1000; // Token Expiration

// SignUp
exports.signup = (req, res, next) => {
  const { username, email, password } = req.body;

  // Check PassWord

  if (!schemaValidPassword.validate(password)) {
    return res.status(403).json({ error: 'Password Security No Conform' });
  }

  // Create New User

  // Hash Password
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const newUser = {
        username: username,
        email: email,
        password: hash,
      };

      User.create(newUser)
        .then((_) => {
          const msg = 'User Created';
          res.json({ status: 200, msg });
        })
        .catch((err) => res.json({ status: 400, err: err.message }));
    })

    .catch((err) => res.json({ status: 500, err: err.message }));
};

// Login
exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findAll({
    where: { username: username },
  })
    .then((user) => {
      // No User found

      if (!user[0]) {
        return res.status(404).json({ err: 'User not found' });
      }

      // Check Password
      bcrypt
        .compare(password, user[0].password)
        .then((valid) => {
          // If no good password
          if (!valid) {
            return res.status(404).json({ err: 'Password no good' });
          }

          // Password Ok

          res.json({
            status: 200,
            data: user[0],
            token: jwt.sign({ userId: user[0].id }, process.env.TOKEN_SECRET, {
              expiresIn: maxAge,
            }),
          });
        })
        .catch((err) => res.status(500).json({ err: err.message }));
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};

//verifToken

exports.verifToken = (req, res) => {
  const { id, token } = req.body;
  const { userId } = jwt.verify(token, process.env.TOKEN_SECRET);

  if (parseInt(id) === parseInt(userId)) {
    User.findAll({
      where: { id },
    })
      .then((user) => {
        res.json({ status: 200, data: user[0], msg: 'user found' });
      })
      .catch((err) => res.json({ status: 404, msg: 'User not found' }));
  } else {
    res.json({ status: 500, msg: 'Error' });
  }
};
