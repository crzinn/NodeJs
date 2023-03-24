const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()
app.use(express.json()) //sinalizar pro express que vai receber json nas requisições

app.set('view engine', 'ejs')//usar como view engine o ejs (como se tivesse 'importando' o ejs)
app.set('views', 'src/views')

//middlewares -> são funções que são executadas antes de qualquer requisição ser feita
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`)
    console.log(`Content Type: ${req.headers['content-type']}`)
    next()
})

//mostrando ejs na tela
app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({})
    res.render('index', { users })//user: user -> mesmo nome então usei desestruturação
})

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
                   //req é request e params é um parametro do objeto req, que armazena o parametro dinamico passado na url
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
    try {                                              //req é request e body é um parametro desse objeto request. o req.body contem as informações passadas por uma requisição do cliente
        const user = await UserModel.create(req.body) //user recebe um modelo de usuario com create de parâmetro, que cria usando o req.boy(se o cliente enviar uma solicitação com um corpo JSON contendo os dados do usuário, como nome, email, senha, etc., esses dados serão extraídos do req.body e usados para criar um novo usuário no banco de dados.)
        res.status(201).json(user)//tratamento
    }catch(error){
        res.status(500).send(error.message)//tratamento de erro
    }
})
//modificar/atualizar um usuario 
app.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true } ) //passamos o id para identificar, depois o que iremos modificar (req.body que no caso é a request do cliente com um objeto json, e depois passamos um objeto com new = true para que a variavel user se atualize)
        res.status(200).json(user)
    } catch(error) {
        res.status(500).send(error.message)
    }
})
//deletando um usuario
app.delete('/del/:id', async (req, res) => {
    try{
        const id = req.params.id
        const user = await UserModel.findByIdAndRemove(id)
        res.status(200).json(user)
    } catch(error) {
        res.status(500).send(error.message) 
    }
})

//colocar o servido online na porta 8080
const port = 8080 
app.listen(port, () => {
    console.log('rodando com express na porta ', port)
})