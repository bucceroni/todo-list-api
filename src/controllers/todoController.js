const Todo = require("../models/todoModel");

exports.add = function(req, res) {
  let todo = new Todo({
    user: req.body.user,
    category: req.body.category,
    description: req.body.description
  });

  todo.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send({ todo });
  });
};
