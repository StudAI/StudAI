const express = require("express");
const app = express();

app.use(express.json());

const authRoute = require("./api/routes/auth");
app.use("/api/user", authRoute);

app.listen(process.env.PORT || 8000);
