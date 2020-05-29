const express = require('express');
const router = express.Router();
const blogpost = require('../controllers/blogpost');

router.get('/all', (req, res) => {
  blogpost.fetchAll((response) => {
    res.json(response);
    return;
  });
  return;
});

module.exports = router;