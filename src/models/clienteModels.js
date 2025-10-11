// importando a conexao com  o banco de dados
// e o tipo de dados da pasta config/db 
//utilizando descontruçao
const { sql, getConnetion} =  require("../config/db")

// objeto clienteModel
const clienteModel = {

    buscarTodos: async () => { 
        try {
            const pool = await getConnetion()

            //comando para buscar todos os dados dos clientes
            let querySQL = "SELECT * FROM clientes"

            const result =  await pool.request().query(querySQL)
        } catch (error) {
            
        }
    }
}