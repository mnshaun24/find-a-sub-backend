const router = require("express").Router();

const{
    getAllSubs,
    getSubById,
    createSub,
    updateSub,
    deleteSub,
    getSubsWithAttachedAccounts
} = require("../../controllers/sub-controller");

// GET and POST at /api/subs
router
.route("/")
.get(getAllSubs)
.post(createSub);

// GET ONE, PUT, DELETE at /api/subs/:id
router
.route("/:id")
.get(getSubById)
.put(updateSub)
.delete(deleteSub);

// GET with attached accounts at /api/subs/accounts
router
.route("/accounts")
.get(getSubsWithAttachedAccounts);

module.exports = router;