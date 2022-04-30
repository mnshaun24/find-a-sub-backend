const Sub = require("../models/Subs");
const User = require("../models/User");

const subController = {
  // get all subs
  getAllSubs(req, res) {
    Sub.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbSubData) => res.json(dbSubData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get a single sub by id
  getSubById({ params }, res) {
    Sub.findOne({ _id: params.id })
      .select("-__v")
      .then((dbSubData) => res.json(dbSubData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create a sub account
  createSub(req, res) {
    req.body.attachedUser = req.params.userId;
    Sub.create(req.body).then((dbSubData) => {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { subProfile: dbSubData._id },
        { new: true, runValidators: true }
      )
        .then((dbUserData) => {
          res.json(dbUserData);
        })
        .catch((err) => res.json(err));
    });
  },

  // update a sub account
  updateSub({ params, body }, res) {
    Sub.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbSubData) => {
        if (!dbSubData) {
          res.status(404).json({ message: "Hey! No sub found with this id" });
          return;
        }
        res.json(dbSubData);
      })
      .catch((err) => res.json(err));
  },

  // delete a sub account
  deleteSub({ params }, res) {
    Sub.findOneAndDelete({ _id: params.id })
      .then((dbSubData) => res.json(dbSubData))
      .catch((err) => res.json(err));
  },

  getSubsWithAttachedAccounts(req, res) {
    Sub.find({})
    .populate("attachedUser")
    .exec(function (err, sub) {
      if (err) return handleError(err);
    })
  }
};

module.exports = subController;
