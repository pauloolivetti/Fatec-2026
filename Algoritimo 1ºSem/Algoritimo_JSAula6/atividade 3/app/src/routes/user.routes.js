const express = require("express");

const { listUsers, createUser, deleteUser } = require("../database/users");

// cria um router
const router = express.Router();

// curl -x GET http://localhost:3003/users
router.get("/", async function (req, res) {
  try {
    const users = await listUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('GET /users error', error);
    res.status(500).json({ error: error.message });
  }
});

// curl -X POST http://localhost:3003/users -H "Content-Type: application/json" -d "{\"name\":\"João\",\"email\":\"joao@teste.com\"}"
router.post("/", async function (req, res) {
  try {
    const { name, email } = req.body;
    const user = await createUser({ name, email });
    res.status(201).json(user);
  } catch (error) {
    console.error('POST /users error', error);
    res.status(500).json({ error: error.message });
  }
});

// http://localhost:3003/users/1
// curl -X DELETE http://localhost:3003/users/1
router.delete("/:id", async function (req, res) {
    const id = req.params.id;
    const user = await deleteUser({ id });
    if (user.message) {
        return res.status(404).json(user);
    } else {
        res.status(200).json(user);
    }
}); 

module.exports = router;
