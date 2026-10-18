
const http = require('http');
const { URL } = require('url');
const news = require('./news');


const server = http.createServer( (req, res) => {


    const url = new URL(req.url, 'http://localhost:3000');

    res.setHeader('Content-Type', 'text/html; charset=utf-8');



    if(url.pathname === "/") {
        res.statusCode = 200;

        let articles = "";

        news.forEach((article, id) => {
            articles += article.title+`<br>`;
        })

        const html = `
            <!DOCTYPE html>
            <html lang="sr">
                <head>
                    <meta charset="utf-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <title>News</title>
                </head>
                <body>
                     <p>${articles}</p>
                </body>
            </html>
        `;


        res.end(html);
    }
    else if (url.pathname === "/kontakt") {
        res.statusCode = 303;
        res.setHeader('Location', '/');
        res.end();
    }
    else if (url.pathname === "/news") {
        res.statusCode = 200;

        const title = url.searchParams.get('title');
        const articleFound = news.find(article => article.title === title);
        console.log(articleFound, title);

        if (articleFound) {
            res.end("Nasli smo clanak!")
        } else {
            res.end("Clanak ne postoji!")
        }
    }
    else {
        res.statusCode = 404;
        res.end("Nepostojeca stranica!");
    }


});
server.listen(3000);

console.log("Server is running at http://localhost:3000");

