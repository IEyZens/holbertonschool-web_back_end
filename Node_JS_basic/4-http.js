const http = require('node:http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log('Hello Holberton School!');
});
