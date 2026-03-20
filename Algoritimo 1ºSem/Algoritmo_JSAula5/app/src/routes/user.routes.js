const express = require("express");

const {listUsers, createUser} = require("../database/users");

// cria um router
const router = express.Router();

router.get("/", async function(req,res){
    const users = await listUsers();
    res.json(users);
});

router.post("/", async function(req,res) {
    const {name, email} = req.body;
    const user = await createUser({name,email});
    res.json(user);
});

module.exports = router;