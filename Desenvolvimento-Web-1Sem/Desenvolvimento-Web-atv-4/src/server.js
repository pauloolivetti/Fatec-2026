const dotenv = require('dotenv')
const express = require('express')
const path = require('path')

dotenv.config({
    quiet: true,
    path: path.resolve(__dirname,"..",".env")
})

const PORT = process.env.PORT

const senasRouter = require("./routes/senas.routes")

const app = express()

app.use(express.json())

const publicPath = path.join(__dirname,"..","public")

const pagesPath = path.join(publicPath,"pages")

const assetsPath = path.join(publicPath,"assets")

app.use('/', express.static(pagesPath))

app.use('/assets', express.static(assetsPath))

app.use('/senas', senasRouter)


app.listen(PORT, ()=>{
    console.log(`Rodando em http://localhost:${PORT}`)
})