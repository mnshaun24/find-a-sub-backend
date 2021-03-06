const router = require("express").Router();

const{
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../../controllers/user-controller");

// GET and POST at /api/users
router
.route("/")
.get(getAllUsers)
.post(createUser);

// PUT, GET ONE, and DELETE at /api/users/:id
router
.route("/:id")
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;