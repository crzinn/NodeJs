const http = require('http')

const port = 8080

const server = http.createServer((req, res) => {
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'}); //escrever no head que o que eu estou mandando é um html
        res.end('<h1>hello world</h1>')
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'John Doe',
                email: 'jon@doe.com'
            },
            {
                name: 'Jane Doe',
                email: 'jane@doe.com'
            }
        ]
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users))
    }

})

server.listen(port, () => console.log(`rodando na porta ${port}`)) //colocar o server online