const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

const User = require("../model/User");

// @router      POST api/users
// @desc        Register a User
// @access      Public
router.post(
  "/",
  body("name", "Please enter name").not().isEmpty(),
  body("email", "Please enter valid email").isEmail(),
  body("password", "Please enter password with min 6 chars or more").isLength({
    min: 6,
  }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ msg: "User already exist" });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
    } catch (err) {
      res.status(500);
      console.log(err.message);
    }

    res.send("User added to DB");
  }
);

module.exports = router;
