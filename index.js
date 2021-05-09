const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

const authRoute = require("./api/routes/auth");
app.use("/api/users", authRoute);

app.listen(process.env.PORT || 8000);
