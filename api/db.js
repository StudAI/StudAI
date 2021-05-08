const fs = require("fs");
const { Pool } = require("pg");
require("dotenv").config();

// Configure the database connection.
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  //For secure connection:
  ssl: {
    ca: fs.readFileSync(process.env.DB_CERT_PATH).toString(),
  },
};

const pool = new Pool(config);

async function createUser(user) {
  const values = [user.name, user.email, user.password];
  const text =
    "INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *";
  try {
    const res = await pool.query(text, values);
    return res.rows[0];
  } catch (err) {
    console.log(err.stack);
    return null;
  }
}

async function findUser(email) {
  const values = [email];
  const text = "SELECT * FROM users WHERE email = $1";
  try {
    const res = await pool.query(text, values);
    return res.rows[0];
  } catch (err) {
    console.log(err.stack);
    return null;
  }
}

exports.createUser = createUser;
exports.findUser = findUser;
