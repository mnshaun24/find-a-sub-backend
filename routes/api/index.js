const router = require("express").Router();
const subRoutes = require("./sub-routes");

router.use("subs", subRoutes);

module.exports = router;