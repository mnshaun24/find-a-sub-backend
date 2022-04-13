const router = require("express").Router();
const subRoutes = require("./sub-routes");
const schoolRoutes = require("./school-routes");

router.use("/subs", subRoutes);
router.use("/find-subs", schoolRoutes);

module.exports = router;