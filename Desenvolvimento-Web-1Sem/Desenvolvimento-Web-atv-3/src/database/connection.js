const dotenv = require('dotenv')
const path = require('path')
 
dotenv.config({
    quiet:true,
    path: path.resolve(__dirname,".." ,"..",".env")
}); 

/* Importando as configurações do DB presentes no arquivo dotenv */

const {Pool} = require("pg"); /* chama a propriedade {pool} que armazena o conteudo do banco de dados */

let config;

if (process.env.DATABASE_URL) {
    config = {
    connectionString: process.env.DATABASE_URL,
  };
} else {
    config = {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT,
  };
}


/* váriavel que armazena a conexão com o banco de dados (propriedades advindas da biblioteca pg)*/

const pool = new Pool(config) /* cria a instância de Pool com todas as configurações setadas. Posteriormente será usada para executar queries no banco */

module.exports = pool; /* exporta a váriavel pool */