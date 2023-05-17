const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        throw err;
      }
    });
  } 
  else {
    
    res.end('Page not found');
  }
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
