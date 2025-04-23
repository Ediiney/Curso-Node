const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello World</h1>');
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'Ediney',
                age: 27
            },
            {
                name: 'Tania',
                age: 29
            },
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});


server.listen(port, () => { console.log(`Server running at http://localhost:${port}/`); });