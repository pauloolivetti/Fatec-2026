const dotenv = require('dotenv');
dotenv.config({quiet: true});

const express = require('express');
const path = require('path');

const PORT = process.env.PORT;

const app = express();

const publicPath = path.join(__dirname, 'public');
const pagesPath = path.join(publicPath, 'pages');

app.listen(PORT, function(){
 console.log(`Rodando em http://localhost:${PORT}`);
});

app.use("/assets", express.static(path.join(publicPath, "assets")));

app.get('/', function(req, res){
    res.sendFile(path.join(pagesPath, "index.html"));

});

app.get('/login', function(req, res){
    res.sendFile(path.join(pagesPath, "login.html"));

});

app.get('/cadastro', function(req, res){
    res.sendFile(path.join(pagesPath, "cadastro.html"));

});

app.use(function(req, res){
    res.status(404).sendFile(path.join(pagesPath, "404.html"));

});
