const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  const file = './file.txt';

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
    res.end('404,File not found');
    } 
    else {
        res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
