import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Methods': 'POST'})
    res.end('<html><h1>The server is working!!!</h1></html>')

})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))
