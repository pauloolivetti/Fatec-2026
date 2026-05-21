const e = require("express");
const pool = require("./connection");

async function listUsers(){
    const query = "SELECT * FROM users ORDER BY name ASC";

    const {rows} = await pool.query(query);
    return rows;
}

async function createUser({ name, email }) {
  const query = `
                  INSERT INTO users (name, email)
                  VALUES ($1, $2)
                  RETURNING *`;

  const values = [name, email];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function deleteUser({ id }) {
  const query = `
                  DELETE FROM users
                  WHERE id_user = $1
                  RETURNING *`;

  const values = [id];
  const response = await pool.query(query, values);
  if (response.rowCount === 1) {
  return response.rows[0];
} else {
  return {message: "Usuário não encontrado"};
  }
}

module.exports = {
    listUsers,
    createUser,
    deleteUser
};