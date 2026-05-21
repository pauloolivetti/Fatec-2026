const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
  quiet: true,
  path: path.resolve(__dirname, "..", ".env"),
});

const router = require("./routes/user.routes")

const express = require("express");

const app = express();

app.use(express.json())

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`rodando em http://localhost:${PORT}`);
});

const publicPath = path.join(__dirname, "..", "public");
const pagesPath = path.join(publicPath, "pages");
const assetsPath = path.join(publicPath, "assets");

//criando uma rota para a pasta pages

app.use(express.static(pagesPath));
app.use("/assets", express.static(assetsPath))

app.use("/users", router)