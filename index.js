const express = require("express");
const app = express();

app.use(express.json());

const authRoute = require("./api/routes/auth");
app.use("/api/users", authRoute);

app.get("/", (req, res) => res.send("what's good"));

app.listen(process.env.PORT || 8000);
