// importando a conexao com  o banco de dados
// e o tipo de dados da pasta config/db 
//utilizando descontruçao
const { sql, getConnetion } = require("../config/db")

// objeto clienteModel
const clienteModel = {

    buscarTodos: async () => {
        try {
            const pool = await getConnetion()

            //comando para buscar todos os dados dos clientes
            let querySQL = "SELECT * FROM clientes"

            const result = await pool.request().query(querySQL)

            return result.recordset; //retorna  uma lista nao sei doqKKKKKKKKKKKKKKKKKKK
        } catch (error) {
            console.error('Erro ao buscar clientes: ', error)
            throw error;
        }
    },

    //VERIFICAR SE O CPF EXISTE 
    buscarPorCPF: async (cpfCliente) => {
        try {
            const pool = await getConnetion()
            
            let querySQL = `
                SELECT * FROM clientes WHERE cpfCliente = @cpfCliente
            `
            
            const result = await pool.request()
            .input('cpfCliente', sql.VarChar(15), cpfCliente)
            .query(querySQL)
            
            return result.recordset;
        } catch (error) {
            console.error('Erro ao verificar o CPF: ', error)
            throw error
        }
    },
    
    //inserir um novo cliente
    inserirCliente: async (nomeCliente, cpfCliente) => {
        try {
            const pool = await getConnetion()// pegando uma conexao sql

            let querySQL = 'INSERT INTO clientes (nomeCliente, cpfCliente) VALUES (@nomeCliente, @cpfCliente)'

            await pool.request()
                .input('nomeCliente', sql.VarChar(100), nomeCliente)
                .input('cpfCliente', sql.VarChar(11), cpfCliente)
                .query(querySQL);
        } catch (error) {
            console.error('Erro ao inserir cliente: ', error)
            throw error
        }
    }

}

module.exports = {
    clienteModel
}