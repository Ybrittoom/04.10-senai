// importar a conexao com o banco de dados e o tipo de dados SQL
//utilizando descontruçao
const { sql, getConnetion } = require("../config/db")

const produtoModel = {
    //metodo
    buscarTodos: async() => {
        try {
            const pool = await getConnetion() //coletando uma funçao

            let querySQL = "SELECT * FROM Produtos"//comando para buscar todos os dados no DB SQL

            const result = await pool.request().query(querySQL)

            return result.recordset; //retorna uma lista nao sei doq kkkkkkkkkkk
        } catch (error) {
            console.error('Erro ao buscar produtos:' , error)
            //passar o erro pro controller, ele que tem que ficar vendo os erros
            throw error   
        }
    }
};

module.exports = {
    produtoModel
};