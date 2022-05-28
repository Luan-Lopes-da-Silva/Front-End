const http = require("http");

http.createServer((request, response ) =>{
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if(request.url === "/produto"){
    response.end("Rota de Protuto")    
    }
    if(request.url === "/usuarios"){
    response.end("Rota de Usuarios")    
    }
    response.end('Qualquer outra rota')
    })
   .listen(4001, () => console.log('Servidor esta rodando na porta 4001'))
