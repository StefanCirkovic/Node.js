
const http = require('http');

const server = http.createServer( (req, res) => {

    res.setHeader('Content-Type', 'text/plain');

    if(req.url === "/") {
        res.statusCode = 200;
        res.end("Dobrodosli na glavnu stranicu!")
    }
    else if (req.url === "/kontakt") {
        res.statusCode = 303;
        res.setHeader('Location', '/');
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end("Dobrodosli na stranicu koja nije glavna!");
    }


});
server.listen(3000);

console.log("Server is running at http://localhost:3000");