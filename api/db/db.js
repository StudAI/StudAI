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
    // ca: fs.readFileSync(process.env.DB_CERT_PATH).toString(),
    rejectUnauthorized: false,
  },
};

const pool = new Pool(config);

async function createUser(user) {
  const values = Object.values(user);
  const text = `INSERT INTO users(name, email, password, is_student, math, science, 
    english, engineering, grade_level, extraversion, agreeableness,conscientiousness,
    neuroticism, openness) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`;
  try {
    const res = await pool.query(text, values);
    return res.rows[0];
  } catch (err) {
    console.log(err.stack);
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
  }
}

async function updateUser(email, user) {
  const values = [...Object.values(user), email];
  const text = `UPDATE users SET math = $1, science = $2, english = $3, 
    engineering = $4, grade_level = $5, extraversion = $6, agreeableness = $7, 
    conscientiousness = $8, neuroticism = $9, openness = $10
    WHERE email = $11 RETURNING *`;
  try {
    const res = await pool.query(text, values);
    return res.rows[0];
  } catch (err) {
    console.log(err.stack);
  }
}

exports.createUser = createUser;
exports.findUser = findUser;
exports.updateUser = updateUser;
