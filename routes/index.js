/* We'll centralize our routes imports to this file to keep our code clean */

const router = require("express").Router();
const wolframRoutes = require("./wolfram_requests");

router.get("/", (req, res) => {
  res.send("This is home");
});

router.use("/api", wolframRoutes);

module.exports = router;
