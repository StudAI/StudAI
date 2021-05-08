const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  console.log("message");
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  };
  try {
    const usernameTaken = await db.userAlreadyExists(user.email);
    if (usernameTaken) {
      return res.status(400).send("😐 username 😤 already 😠 taken 😡");
    }
    const savedUser = await db.createUser(user);
    res.send("User created successfully  😩").status(200);
  } catch (error) {
    res.status(400).send("😢 something 😭 went 😤 wrong 😠 with 😡 request 🤬");
  }
});

// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     if (!user) {
//       return res.status(400).send("😐 no 😤 user 😠 found 😡");
//     }
//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!validPassword) {
//       return res.status(400).send("🤡 invalid 💩 password 💀");
//     }
//     const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
//     res.header("auth-token", token).send(token);
//   } catch (error) {
//     res.status(400).send("😢 something 😭 went 😤 wrong 😠 with 😡 request 🤬");
//   }
// });

module.exports = router;
