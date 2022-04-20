const { Substitute, SubAccount } = require("../models");

const schoolController = {
  // get all subs for schools to search through
  getAllSubs(req, res) {
    SubAccount.find({})
      .then((dbSubData) => res.json(dbSubData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one sub based on their id number
  getSubById({ params }, res) {
    SubAccount.findOne({ _id: params.subAccountid })
      .then((dbUserData) => {
        if (!dbUserData) {
          res
            .status(404)
            .json({ message: "No such teacher found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = schoolController;