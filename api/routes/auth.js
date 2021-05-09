const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/db");
const verify = require("./verify");

router.post("/register", async (req, res) => {
  try {
    const usernameTaken = await db.findUser(req.body.email);
    if (usernameTaken) {
      return res.status(400).send("😐 username 😤 already 😠 taken 😡");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      isStudent: req.body.isStudent,
      math: req.body.math,
      science: req.body.science,
      english: req.body.english,
      engineering: req.body.engineering,
      grade_level: req.body.grade_level,
      extraversion: req.body.extraversion,
      agreeableness: req.body.agreeableness,
      conscientiousness: req.body.conscientiousness,
      neuroticism: req.body.neuroticism,
      openness: req.body.openness,
    };
    const savedUser = await db.createUser(user);
    res.send("User created successfully  😩").status(200);
  } catch (error) {
    res.status(400).send("😢 something 😭 went 😤 wrong 😠 with 😡 request 🤬");
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await db.findUser(req.body.email);
    if (!user) {
      return res.status(400).send("😐 no 😤 user 😠 found 😡");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("🤡 invalid 💩 password 💀");
    }
    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token).status(200);
  } catch (error) {
    console.log(error);
    res.status(400).send("😢 something 😭 went 😤 wrong 😠 with 😡 request 🤬");
  }
});

router.put("/:email", verify, async (req, res) => {
  try {
    const userExists = await db.findUser(req.params.email);
    if (!userExists) {
      return res.status(400).send("😐 no 😤 user 😠 found 😡");
    }
    const user = {
      math: req.body.math,
      science: req.body.science,
      english: req.body.english,
      engineering: req.body.engineering,
      grade_level: req.body.grade_level,
      extraversion: req.body.extraversion,
      agreeableness: req.body.agreeableness,
      conscientiousness: req.body.conscientiousness,
      neuroticism: req.body.neuroticism,
      openness: req.body.openness,
    };
    const savedUser = await db.updateUser(req.params.email, user);
    res.send("User updated successfully  😩").status(200);
  } catch (error) {
    console.log(error);
    res.status(400).send("😢 something 😭 went 😤 wrong 😠 with 😡 request 🤬");
  }
});

module.exports = router;
