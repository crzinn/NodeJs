const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()
app.use(express.json()) //sinalizar pro express que vai receber json

//função assincrona tipo get que pega usuarios do banco de dados
//se der certo o status code e 200 e ele retorna um json com os usuarios (users)
//se der errado ele reporta um statuscode 500 e envia uma mensagem de erro com o erro
app.get('/users', async (req, res) => {
   try {
    const users = await UserModel.find({})
    res.status(200).json(users)

   }catch (error){
    return res.status(500).send(error.message)
   }
})
//pegar usuario por id
app.get('/users/:id', async (req, res) => {
//tudo que e colocado depois do users é lido como id, nesse caso. ('/users/:id')
    try{
        //para acessar um parametro(nesse caso o nosso id):
        const id = req.params.id //id precisa ser id (mesmo nome do parametro da url para o req.params)

        //para pegar um usuario pelo seu id no banco:
        const user =  await UserModel.findById(id) // pegamos de UserModel, buscando pelo id gerado, o id de cada usuario
        //se der certo vai retornar o usuario que tem a id solicitada na request junto com o status code 200
        return res.status(200).json(user)

    }catch(error){
        return res.status(500).send(error.message) //tratamento de erro
    }

})
// colocar usuario no banco
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body) //user recebe UserModel com create de parâmetro, que cria usando req no body
        res.status(201).json(user)//tratamento
    }catch(error){
        res.status(500).send(error.message)//tratamento de erro
    }
})
//colocar o servido online na porta 8080
const port = 8080 
app.listen(port, () => {
    console.log('rodando com express na porta ', port)
})