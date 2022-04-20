const router = require("express").Router();
const subRoutes = require("./sub-routes");
const schoolRoutes = require("./school-routes");
const userRoutes = require("./user-routes");

router.use("/subs", subRoutes);
router.use("/find-subs", schoolRoutes);
router.use("/users", userRoutes);

module.exports = router;