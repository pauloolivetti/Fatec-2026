const { Pool } = require("pg");
const dotenv = require("dotenv");
const path = require("path");

// Carrega  as variáveis de ambiente definidas no arquivo .env
dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env"), quiet: true });

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
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
  };
}

console.log('db config:', {
  host: config.host,
  user: config.user,
  passwordType: typeof config.password,
  passwordValue: config.password ? 'SET' : 'UNSET',
  database: config.database,
  port: config.port,
  connectionString: config.connectionString ? 'SET' : 'UNSET',
});

if (!config || (config.connectionString ? false : !config.password)) {
  throw new Error('Configuração do banco incompleta: verifique .env e variáveis de ambiente.');
}

var pool = new Pool(config);

module.exports = pool;