// const {readFileSync} = require('fs');
// const http = require('http')
// const fi = readFileSync('./inde.html',"utf8");
// const server = http.createServer((req,res)=>{
//     if(req.url == '/') {
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(fi)
//         res.end()
//     }
//     else{
//         res.end()
//     }
// })

// server.listen(5000)
const express = require('express')
const app = express();
