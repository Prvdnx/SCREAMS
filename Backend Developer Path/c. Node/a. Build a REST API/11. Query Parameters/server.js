import http from 'node:http'

const server = http.createServer((req, res) => {

    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    console.log(urlObj)
    
    // http://localhost:8000/api?country=india&continent=asia

    // comment the console.log(urlObj) above and uncomment the lines below to see the URL object
    // const queryObj = Object.fromEntries(urlObj.searchParams)
    // console.log(queryObj)

})

server.listen(8000, () => console.log('Server listening on port 8006'))

