const router = require("express").Router();

const {
    createSub,
    updateSub,
    deleteSub
} = require("../../controllers/sub-controller");

// set up general routes at /api/subs/:userId
router
.route("/:userId")
.post(createSub);

// set up routes based on id at api/subs/:userId/:subId
router
.route("/:userId/:subId")
.put(updateSub)
.delete(deleteSub);

module.exports = router;