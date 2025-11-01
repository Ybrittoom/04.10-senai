const bcrypt = require('bcrypt')//importando a biblioteca 

let senha = 'senha-123'

//quanto maior o salt, mais forte vai ser sua criptografia
//porem vai ser mais demorado para carregar e pesado para gerar
const saltRounds = 10

// vai gerar um hash
const senhaCriptografada = bcrypt.hashSync(senha, saltRounds)

console.log("Senha original", senha)
console.log("Senha criptografada:" , senhaCriptografada)

const senhaIncorreta = 'senha'

const senhaValida = bcrypt.compareSync(senhaIncorreta, senhaCriptografada)

if (senhaValida) {
    console.log('Senha valida!')
} else {
    console.log('Senha incorreta!')
}