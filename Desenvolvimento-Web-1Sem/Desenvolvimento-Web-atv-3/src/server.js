const dotenv = require('dotenv') 

const express = require('express') 

const path = require('path') 

dotenv.config({
    quiet:true,
    path: path.resolve(__dirname,"..",".env")
});

const PORT = process.env.PORT 

const userRoutes = require("./routes/user.routes")

const app = express(); /* incorpora e chama a variavel com biblioteca express */

app.use(express.json())

const publicPath = path.join(__dirname,"..", "public") /* Cria variavel com o caminho para a pasta public */
const pagesPath = path.join(publicPath,"pages") /* Cria variavel com o caminho para a pasta pages */
const assetsPath = path.join(publicPath,"assets") /* Cria variavel com o caminho para a pasta assets */

app.use("/", express.static(pagesPath)) /* mapeia a rota "/" para exibição da página */
app.use("/assets", express.static(assetsPath)) /* mapeia a rota "/assets" para carregamento dos arquivos css e js */
app.use("/users", userRoutes) /* mapeia a rota "/users" para carregamento dos usuários */

app.listen(PORT, function(){
    console.log(`Rodando em http://localhost:${PORT}`)
})