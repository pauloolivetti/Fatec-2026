const pool = require("./connection");

async function listUsers() {
  const query = "SELECT * FROM users ORDER BY name ASC";

  const { rows } = await pool.query(query);
  return rows;
}

async function createUser({ name, email }) {
  const query = `
      INSERT INTO users (name, email)
      VALUES ($1, $2)
      RETURNING *
    `;

  const values = [name, email];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

module.exports = {
  listUsers,
  createUser
};