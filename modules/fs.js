const fs = require('fs')
const path = require('path')

//criar uma pasta
fs.mkdir(path.join(__dirname, '/laele'), (error) => {
    if (error){
        return console.error('Erro: ', error) //se chegar no return a linha de baixo nao é execuada, por isso nao precisa do else
    }
    console.log('Pasta criada com sucesso!')
}) 

//criar um arquivo

fs.writeFile(path.join(__dirname, '/laele', 'teste.txt'), 'hello node', (error) => {
    if (error){
        return console.error(error)
    } 
    console.log('criado com sucesso!')
}) 

//adicionar a um arquivo

fs.appendFile(path.join(__dirname, '/laele', 'teste.txt'), ', hello world' ,(error) => {
    if (error) {
        return console.error(error)
    }
    console.log('modificado com sucesso')
})

//ler algum arquivo
fs.readFile(path.join(__dirname, '/laele', 'teste.txt'), 'utf8', (error, data) => {
    if(error) {
        return console.error(error)
    }
    console.log(data)
} )