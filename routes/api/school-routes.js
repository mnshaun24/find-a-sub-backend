const router = require("express").Router();

const {
    getAllSubs,
    getSubById
} = require("../../controllers/school-controller");

router
.route("/")
.get(getAllSubs);

router
.route("/:id")
.get(getSubById);

module.exports = router;