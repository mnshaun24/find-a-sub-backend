const router = require("express").Router();
const subRoutes = require("./sub-routes");
const schoolRoutes = require("./school-routes");
const userRoutes = require("./user-routes");

router.use("/subs", subRoutes);
router.use("/find-subs", schoolRoutes);
router.use("/users", userRoutes);

module.exports = router;

// note that api route files are sorted by user usage. 
// Hence schoolRoutes refers to routes school users use