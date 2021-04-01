const express = require("express");
const router = express.Router();

// @router      GET api/auth
// @desc        Get Contacts
// @access      Private
router.get("/", (req, res) => {
  res.send("Get Contacts");
});

// @router      POST api/auth
// @desc        Add Contact
// @access      Private
router.post("/", (req, res) => {
  res.send("Add Contact");
});

// @router      PUT api/auth/:id
// @desc        Update Contact
// @access      Private
router.put("/:id", (req, res) => {
  res.send("Update Contact");
});

// @router      DELETE api/auth/:id
// @desc        Delete Contact
// @access      Private
router.delete("/:id", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;
