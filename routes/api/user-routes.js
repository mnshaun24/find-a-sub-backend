const router = require("express").Router();



const {
    createUser
} = require("../../controllers/user-controller");

const {
    getUserById,
    deleteUser
} = require("../../controllers/user-controller");


// set up general routes at /api/users
router
.route("/")
.post(createUser);


// set up general routes at /api/users/:id
router
.route("/:id")
.get(getUserById)
.delete(deleteUser);


module.exports = router;