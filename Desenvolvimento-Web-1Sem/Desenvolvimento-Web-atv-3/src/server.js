const path = require("path");
const express = require("express");
const app = express();  
const dotenv = require("dotenv");
dotenv.config({ 
    quiet: true, 
    path: path.resolve(__dirname, "..", ".env")
});

const userRoutes = require("./routes/user.routes");
const PORT = process.env.PORT;
const publicPath = path.join(__dirname, "..", "public");
const pagesPath = path.join(publicPath, "pages");
const assetsPath = path.join(publicPath, "assets");

app.use(express.json()); // para interpretar o corpo das requisições como JSON  

app.listen(PORT, function(){
    console.log(`Rodando em http://localhost:${PORT}`);

});    

// a rota para a pagina index.html
app.use("/", express.static(pagesPath));
//definir a rota para os arquivos estáticos (css, js, imagens)
app.use("/assets", express.static(assetsPath));

app.use("/users", userRoutes);