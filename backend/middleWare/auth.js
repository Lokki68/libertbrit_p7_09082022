const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.Authorization;

  if (token === undefined) {
    res.status(404).json({ msg: 'Token not found' });
  } else {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ msg: 'Invalid Token' });
      } else {
        req.body.id = decoded.userId;
        next();
      }
    });
  }
};
