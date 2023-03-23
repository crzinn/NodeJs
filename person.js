class Person {
    constructor(name) { //this nesse caso se referencia ao objeto que esta sendo criado pela classe
        this.name = name      // no caso seria algo como objeto.nome = nome (passado ao criar o obj com a classe person)  
    }
    sayMyName() {
        return `seu nome é ${this.name}` //this.name por que e o nome do objeto criado
    }
}
module.exports = {
    Person,
    
}
