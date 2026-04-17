const express = require('express') 

const {listUsers, createUser, deleteUser} = require("../database/users")

const router = express.Router()

router.get("/", async function(__req,res){
    const users = await listUsers()
    res.json(users)
})

router.post("/", async function(req,res){
    const {name,email} = req.body;
    const user = await createUser(name,email)
    res.json(user)
})

router.delete("/:id", async function(req,res){
    const id = req.params.id;
    const user = await deleteUser(id)
    if(user.message){
        res.status(404).json(user)
    } else {
        res.status(200).json(user)
    }
})

module.exports = router;                                               