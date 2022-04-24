const Substitute = require("../models/User");

const schoolController = {
  // get all subs for schools to search through
  getAllSubs(req, res) {
    Substitute.find({})
      .then((dbSubData) => res.json(dbSubData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one sub based on their id number
  getSubById({ params }, res) {
    Substitute.findOne({ _id: params.Subid })
      .then((dbSubData) => {
        if (!dbSubData) {
          res
            .status(404)
            .json({ message: "No such teacher found with this id" });
          return;
        }
        res.json(dbSubData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = schoolController;
