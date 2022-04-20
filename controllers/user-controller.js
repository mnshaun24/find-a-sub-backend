const SubAccount = require("../models/User");
const Substitute = require("../models/Subs");

const userController = {
  // get a user by id so each sub can view only their account and profile
  getUserById({ params }, res) {
    SubAccount.findOne({ _id: params.userId })
      .populate({
        path: "subProfiles",
        select: "-__v",
      })
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
};

module.exports = userController;
