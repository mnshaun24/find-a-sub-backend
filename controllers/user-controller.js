const SubAccount = require("../models/User");

const userController = {
  // get a user by id so each sub can view only their account and profile
  getUserById({ params }, res) {
    SubAccount.findOne({ _id: params.userId })
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create a new user account
  createUser({ body }, res) {
    SubAccount.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },

  // delete a user account
  deleteUser({ params }, res) {
    SubAccount.findOneAndDelete({ _id: params.userId })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  // get all user accounts this is for development testing purposes
  displayAllUsers(req, res) {
    SubAccount.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
  }
};

module.exports = userController;
