const express = require('express') 

const {listSenas, addSenas} = require('../database/senas')

const router = express.Router()

router.get('/', async (req, res)=>{
    const senas = await listSenas()
    res.json(senas)
})

router.post('/', async (req, res)=>{
    const {newSenas} = req.body
    const sena = await addSenas(newSenas)
    res.json(sena)
})

module.exports = router;  