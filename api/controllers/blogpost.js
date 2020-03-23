const BlogPost = require('../models/blogpost');

module.exports = {
  fetchAll(res) {
    const query = {};
    BlogPost.find(query, (err, data = []) => {
      if (err) {
        res(error);
        return;
      }
      res(data);
      return;
    });
  }
}