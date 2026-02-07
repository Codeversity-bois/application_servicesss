const router = require("express").Router();

// Simple test route - no controllers, no middlewares
router.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Scheduling service is running!" });
});

router.get("/test", (req, res) => {
  res.json({ message: "Test route works!" });
});

router.post("/test", (req, res) => {
  res.json({ message: "POST test works!", body: req.body });
});

module.exports = router;