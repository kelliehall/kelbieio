const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

router.get('/login', (req, res) => {
  auth.login((response) => {
    res.json(response);
    return;
  });
  return;
});

module.exports = router;