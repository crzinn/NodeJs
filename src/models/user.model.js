const mongoose = require('mongoose')
//definindo estrutura de dados que vamos guardar dentro do banco
//pra definir quais campos esse usuario vai ter(um email, senha etc) usamos um schema
const userSchema = new mongoose.Schema({ //esquema de usuarios recebendo uma nova instancia tendo 4 campos nesse caso
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    },

})
//podemos encarar os esquemas como tabelas onde cada tabela recebe um nome e suas informações, por exemplo a tabela
//userSchema criada anteriormente tem nome de userSchema(esquema de usuarios)


//anteriormente criamos o esquema de fluxo que deve ser seguido que contém a
//definição dos campos e tipos de dados que serão armazenados no banco de dados para cada usuário.
//agora vamos utilizar esses dados em um modelo de dados
const UserModel = mongoose.model('User', userSchema) //UserModel recebendo um modelo com nome e o esquema que deve ser seguido

module.exports = UserModel