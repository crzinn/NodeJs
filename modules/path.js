const path = require('path')

//basename

console.log(path.basename(__filename)) //nome do arquivo 

console.log(path.dirname(__filename)) //diretorio do arquivo

//extensao do arquivo
console.log(path.extname(__filename))

//criar objeto path

console.log(path.parse(__filename)) //cria um objeto com as inforaçoes do arquivo especificado

//juntar caminhos de arquivos

console.log(path.join(__dirname, 'teste', 'teste.html')) //criei um diretorio atual jutado com uma pasta teste e um arquivo teste.html em seguida