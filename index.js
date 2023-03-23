//const { Person } = require('./person') //desestruturação cria variaveis com o mesmo nome das propriedades do objeto
const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/conect')
//require('./modules/path')
//require('./modules/fs')
//require('./modules/http')
dotenv.config()
connectToDatabase()

require('./modules/express')
//const person = new Person('Arthur')