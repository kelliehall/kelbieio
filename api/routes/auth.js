const express = require('express');
const router = express.Router();
const sanitizer = require('sanitizer');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { RSA_PRIVATE } = require('../config/keys');

router.post('/register', (req, res) => {
  let { username, password } = req.body;
  const safeUser = sanitizer.sanitize(username);
  const safePassword = sanitizer.sanitize(password);
  if (safeUser && safePassword) {
    User.findOne({ username: safeUser }, (error, exists) => {
      if (error) {
        res.status(403).send({ error });
        return;
      }
      if (!exists) {
        bcrypt.hash(safePassword, 10, (error, hashed) => {
          if (error) {
            res.status(403).send({ error });
            return;
          }
          let newUser = new User({ username: safeUser, password: hashed });
          User.create(newUser)
            .then(data => {
              let { username, role } = data;
              res.send({ username, role });
              return;
            })
            .catch(error => {
              res.status(404).send({ error });
              return;
            });
        });
      } else {
        // username in use
        res.status(409).send({ error: 'Username in use' });
        return;
      }
    });
  } else {
    res.status(400);
    return;
  }
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  const safeUser = sanitizer.sanitize(username);
  const safePassword = sanitizer.sanitize(password);
  if (safeUser && safePassword) {
    User.findOne({ username: safeUser }, (error, user) => {
      if (error) {
        res.status(403).send({ error });
        return;
      }
      if (user) {
        bcrypt.compare(safePassword, user.password, function (error, authenticated) {
          if (authenticated) {
            const jwtBearerToken = jwt.sign({}, { key: RSA_PRIVATE, passphrase: config.pp }, {
              algorithm: 'RS256',
              expiresIn: '10h',
              subject: safeUser
            });
            user.token = jwtBearerToken;
            user.lastLogin = Date.now();
            user.save();
            res.send({
              username: user.username,
              role: user.role,
              token: user.token
            });
          } else {
            res.status(403).send({ error });
            return;
          }
        });
      } else {
        res.status(403).send({ error });
        return;
      }
    });
  } else {
    res.status(403).send({ error });
    return;
  }
});

module.exports = router;