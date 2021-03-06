const Todo = require("../models/todoModel");

exports.create = function(req, res) {
  let todo = new Todo({
    user: req.body.user,
    category: req.body.category,
    description: req.body.description,
    createdAt: req.body.createdAt ? req.body.createdAt : new Date()
  });

  todo.save(function(err) {
    if (err) {
      res.status(400).send({
        message: err.message
      });
    }
    res.send({ todo });
  });
};

exports.update = function(req, res) {
  Todo.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
    function(err, todo) {
      if (err) {
        res.status(400).send({
          message: err.message
        });
      }
      res.send(todo);
    }
  );
};

exports.delete = function(req, res) {
  Todo.findOneAndDelete({ _id: req.params.id }, function(err, todo) {
    if (err) {
      res.status(400).send({
        message: err.message
      });
    }
    res.send(todo);
  });
};

exports.user = function(req, res) {
  Todo.find({ user: req.params.user }, function(err, todos) {
    if (err) {
      res.status(400).send({
        message: err.message
      });
    }
    res.send(todos);
  });
};
