const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to my page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oooops!</h1>
    <p>We cant find your request<p>
    <a href="/"> back home</a>
    `)

})

server.listen(5000)