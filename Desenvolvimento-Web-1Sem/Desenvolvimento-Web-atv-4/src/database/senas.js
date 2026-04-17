const pool = require('./connection')

async function listSenas() {
    const sql = "SELECT * FROM senas ORDER BY id_senas DESC"

    const {rows} = await pool.query(sql)

    return rows
}

async function addSenas(senasNumb) {

    const sql = `
    INSERT INTO senas (nros)
    values ($1)`

    const values = [senasNumb]

    const {rows} = await pool.query(sql,values)

    return rows[0]
}

module.exports = {
    listSenas,
    addSenas
}