const { Substitute, User, SubAccount } = require("../models");

const subController = {
  // create a new substitute profile
  createSub({ params, body }, res) {
    console.log(params);
    Substitute.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { subProfiles: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  // update a substitute profile by id
  updateSub({ params, body }, res) {
    Substitute.findOneAndUpdate({ _id: params.substitute.Id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbSubData) => {
        if (!dbSubData) {
          res
            .status(404)
            .json({ message: "No substitute was found with this id" });
          return;
        }
        res.json(dbSubData);
      })
      .catch((err) => res.json(err));
  },

  // delete a substitute profile
  deleteSub({ params }, res) {
    Substitute.findOneAndDelete({ _id: params.substituteId })
    .then(deletedSub => {
      if (!deletedSub) {
        return res.status(404).json({ message: "No substitute with this id!" });
      }
      return SubAccount.findOneAndUpdate(
        { _id: params.subAccountId },
        { $pull: { subProfiles: params.substituteId } },
        { new: true }
      );
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
  },
};

module.exports = subController;
