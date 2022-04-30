const router = require("express").Router();

const{
    getAllSubs,
    getSubById,
    createSub,
    updateSub,
    deleteSub,
<<<<<<< HEAD
    getSubsWithAttachedAccounts
=======
    // attachSubToUser
>>>>>>> feature/relations
} = require("../../controllers/sub-controller");

// GET at /api/subs
router
.route("/")
.get(getAllSubs);

// GET ONE, PUT, DELETE at /api/subs/:id
router
.route("/:id")
.get(getSubById)
.put(updateSub)
.delete(deleteSub);

<<<<<<< HEAD
// GET with attached accounts at /api/subs/accounts
router
.route("/accounts")
.get(getSubsWithAttachedAccounts);
=======
// POST at /api/subs/create/:userId
router
.route("/create/:userId")
.post(createSub)
// this is paired with the post route since the front end runs these two api concurrently upon sub creation
// .put(attachSubToUser);
>>>>>>> feature/relations

module.exports = router;