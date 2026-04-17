const pool = require('./connection') /* importa o conteudo do arquivo connection */

async function listUsers(){
    const sql = "SELECT * FROM users ORDER BY NAME ASC" /* cria variavel com comando para selecionar as linhas da tabela users */

    const {rows} = await pool.query(sql)/* É feita uma promise com metódo .query para acesso e retorno dos dados. Logo após armazena, na variavel descomponentizada rows o conteudo*/

    return rows; /* retorna a variavel rows */
}

async function createUser(name,email){
    const sql = `INSERT INTO users (name,email)
    VALUES ($1, $2)
    returning *`

    const values = [name, email]
     
    const {rows} = await pool.query(sql,values)

    return rows[0]; 
}

async function deleteUser(id){
    const sql = `DELETE FROM users
    WHERE id_users = $1
    RETURNING *`

    const values = [id]
     
    const response = await pool.query(sql,values)
    if(response.rowCount ==1){
        return response.rows[0]
    } else {
        return {message: "Usuário não encontrado"}
    }
}

module.exports = {
    listUsers,
    createUser,
    deleteUser         
} /* Exporta toda a função listen Users */