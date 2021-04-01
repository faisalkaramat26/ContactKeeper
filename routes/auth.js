const express = require("express");
const router = express.Router();

// @router      GET api/auth
// @desc        Get logged in User
// @access      Private
router.get("/", (req, res) => {
  res.send("Get logged in User");
});

// @router      POST api/auth
// @desc        Auth user & get token
// @access      Public
router.post("/", (req, res) => {
  res.send("Auth user & get token");
});

module.exports = router;
