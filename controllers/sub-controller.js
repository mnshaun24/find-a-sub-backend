const Substitute = require("../models/Subs");

const subController = {
  // create a new substitute profile
  // the substitute model is referenced in the useraccount model so that a user can return only their single profile
  createSub({ body }, res) {
    Substitute.create(body)
      .then((dbSubData) => res.json(dbSubData))
      .catch((err) => res.json(err));
  },

  // update a substitute profile by id
  updateSub({ params, body }, res) {
    Substitute.findOneAndUpdate({ _id: params.subId }, body, {
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
    Substitute.findOneAndDelete({ _id: params.subId })
      .then((dbSubData) => res.json(dbSubData))
      .catch((err) => res.json(err));
  },
};

module.exports = subController;
