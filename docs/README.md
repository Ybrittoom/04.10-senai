## API reference 

### Produtos 

#### GET /produtos 
- **Descriçao**: Obtem uma lista de produtos
- **Response**: Array de produtos

#### POST /produtos 
- **Descriçao**: Cria um novo produto
- **Body**:
```
{
    "nomeProduto": "produtoDeExemplo",
    "precoProduto": 2000,00
}
```

-**Response**:
```
{
    "message": "Produto cadastrado com sucesso"
}
```     

#### Clientes

##### GET /clientes
- **Descriçao**: Obtem uma lista de todos os clientes cadastrados 
- **Body**:
```
{
    "nomeCliente": "nomeExemplo",
    "cpfCliente": "11122233344"
}
```

-**Response**:
```
{
    "message": "Cliente cadastrado com sucesso"
}
```

-**Erros que podem aparecer**:

-**400**:
```
{
    erro: "Campos obrigatorios nao preenchidos"
}
```