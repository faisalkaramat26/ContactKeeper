const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

const User = require("../model/User");
const Contact = require("../model/Contact");

// @router      GET api/auth
// @desc        Get Contacts
// @access      Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @router      POST api/auth
// @desc        Add Contact
// @access      Private
router.post(
  "/",
  auth,
  body("name", "Please enter name").not().isEmpty(),
  body("phone", "Please enter valid phone number")
    .isNumeric()
    .isLength({ max: 10 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      let existingContact = await Contact.findOne({ user: req.user.id, phone });

      if (existingContact) {
        return res
          .status(400)
          .json({ msg: "Contact already exist for this user" });
      }

      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      res.status(500).json({ msg: "Server Error" });
      console.log(err.message);
    }
  }
);

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
