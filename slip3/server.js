const http=require('http')
const uc=require('upper-case')
const name='raj';
http.createServer((req,res)=>{
    res.end(`Hello ${uc.upperCase(name)} nice to meet you!`)
}).listen(1000);