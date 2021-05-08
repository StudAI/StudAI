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
  const values = [
    user.name,
    user.email,
    user.password,
    user.bio,
    user.timeZone,
    user.isStudent,
    user.isMentor,
    user.studyStartTime,
    user.studyEndTime,
  ];
  const text = `INSERT INTO users(name, email, password, bio, timezone, is_student, is_mentor, study_start_time, study_end_time) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
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
  const values = [
    user.name,
    user.email,
    user.password,
    user.bio,
    user.timeZone,
    user.isStudent,
    user.isMentor,
    user.studyStartTime,
    user.studyEndTime,
    email,
  ];
  const text = `UPDATE users SET name = $1, email = $2, password = $3, bio = $4, 
    timezone = $5, is_student = $6, is_mentor = $7, study_start_time = $8, study_end_time = $9
    WHERE email = $10 RETURNING *`;
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
