const router = require("express").Router();

const {
    createUser,
    getUserById,
    deleteUser
} = require("../../controllers/user-controller");


// set up general routes at /api/users
router
.route("/")
.post(createUser);


// set up general routes at /api/users/:userId
router
.route("/:userId")
.get(getUserById)
.delete(deleteUser);


module.exports = router;