const http = require('http');
const fs = require('fs');

const file = './file.txt';
const server = http.createServer((req,res) =>
{
    fs.readFile(file,'utf-8',(err,data)=>
    {
        if(err)
            res.end('404,File not found!');
        else
            res.end(data);
    });

}).listen(5000);