// importar a conexao com o banco de dados e o tipo de dados SQL
//utilizando descontruçao
const { sql, getConnetion } = require("../config/db")

const produtoModel = { //objeto produtoModel
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
    },
                    // serve para buscar o ID de UM produto
    buscarUm: async (idProduto) => {
        try {
                        //esperar a conexao para continuar o codigo
            const pool = await getConnetion()

            const querySQL = 
            `SELECT * FROM Produtos WHERE idProduto = @idProduto`

            const result = await pool.request()
                .input('idProduto', sql.UniqueIdentifier, idProduto)
                .query(querySQL)

            return result.recordset
        } catch (error) {
            console.error('Erro ao buscar o produto: ', error)
            throw error // afunçao que for chamar, everbere o erro aqui com o throw
        }
    },

    inserirProduto: async (nomeProduto, precoProduto) => {
        try {
            const pool = await getConnetion() //pegando uma conexao 

            let querySQL = 'INSERT INTO produtos (nomeProduto, precoProduto) VALUES (@nomeProduto, @precoProduto)';

            // primeiro argumento é o nome da variavel
            // depois o tipo da variavel
            //
            await pool.request()
                .input('nomeProduto', sql.VarChar(100), nomeProduto)
                .input('precoProduto', sql.Decimal(10,2), precoProduto)
                .query(querySQL)//passando a query para executar o comando 
        } catch (error) {
            console.error('Erro ao inserir produto: ', error)
            throw error; // passar para quem vai resolver esse erro 
        }
    },

    atualizarProduto: async (idProduto, nomeProduto, precoProduto) => {
        try {
            //coletar uma conexao
            const pool = await getConnetion()

            // evitar sql injection
            const querySQL = `
                UPDATE Produtos
                SET nomeProduto = @nomeProduto,
                    precoProduto = @precoProduto
                WHERE idProduto = @idProduto
            `
            await pool.request()
                .input('nomeProduto', sql.VarChar(100), nomeProduto)
                .input('precoProduto', sql.Decimal(10, 2), precoProduto)
                .input('idProduto', sql.UniqueIdentifier, idProduto)
                .query(querySQL)
        } catch (error) {
            console.error('Erro ao atualiza produto: ' , error)
            throw error
        }
    },

    deletarProduto: async (idProduto) => {
        try {
            //SEMPRE fazer conexao com o banco de dados
            const pool = await getConnetion()

            const querySQL = `
                DELETE FROM Produtos 
                WHERE idProduto = @idProduto
            `

            await pool.request()
                .input("idProduto", sql.UniqueIdentifier, idProduto)
                .query(querySQL /*comando para realizar a quary do banco de dados*/)
        } catch (error) {
            console.error('Erro ao deletar produto: ', error)
            throw error;
        }
    }

};

module.exports = {
    produtoModel
};