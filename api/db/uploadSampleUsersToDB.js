const fs = require("fs");
const { Pool } = require("pg");
require("dotenv").config();
const sampleUsers = require("./sampleUsers.json").users;

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

function uploadUsers() {
  sampleUsers.forEach((user) => uploadUser(user));
}

async function uploadUser(user) {
  const values = Object.values(user);
  const text = `INSERT INTO users(is_student, user_id, name, email, password, math, science, english, engineering, 
    grade_level, extraversion, agreeableness, conscientiousness, neuroticism, openness) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;
  try {
    await pool.query(text, values);
  } catch (err) {
    console.log(err.stack);
  }
}

uploadUsers();
