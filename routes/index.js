const router = require("express").Router();
const apiRoutes = require("./api/");
const accountRoutes = require("./account");

router.use("/api", apiRoutes);
router.use("/account", accountRoutes);

router.use((req, res) => {
    res.status(404).send("<h1>Oh no. 404 Error!</h1>");
});

module.exports = router;