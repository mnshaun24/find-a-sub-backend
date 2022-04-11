const { Substitute } = require("../models");

const subController = {
    // create a new substitute profile
    createSub({ body }, res) {
        Substitute.create(body)
        .then(dbSubData => res.json(dbSubData))
        .catch(err => res.json(err));
    },

    // update a substitute profile by id
    updateSub({ params, body }, res) {
        Substitute.findOneAndUpdate({ _id: params.id }, body, {new:true, runValidators: true})
        .then(dbSubData => {
            if (!dbSubData) {
                res.status(404).json({ message: "No substitute was found with this id" });
                return;
            }
            res.json(dbSubData);
        })
        .catch(err => res.json(err));
    },

    // delete a substitute profile
    deleteSub({ params }, res) {
        Substitute.findOneAndDelete({ _id: params.id })
        .then(dbSubData => res.json(dbSubData))
        .catch(err => res.json(err));
    }
};

module.exports = subController;