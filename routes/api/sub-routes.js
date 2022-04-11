const router = require("express").Router();

const {
    createSub,
    updateSub,
    deleteSub
} = require("../../controllers/sub-controller");

// set up general routes at /api/subs
router
.route("/")
.post(createSub);

// set up routes based on id at api/subs/:id
router
.route("/:id")
.put(updateSub)
.delete(deleteSub);

module.exports = router;