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
// const path = require('path')
// const express = require('express')
// const app = express();
// const p = path.resolve(__dirname,'index.html')
// app.use(express.static('./public'))
// app.get('/',(req,res)=>{
//     res.status(200).sendFile(p)
// })
// app.get('/',(req,res)=>{
//     res.status(200).send('hi2')
// })
// app.all('*',(req,res)=>{
//     res.status(404).send('<h1><b>NOT FOUND</b></h1>')
// })
// app.listen(5000,()=>{
//     console.log("on 5000")
// })

const express = require('express')
const app = express();
const {products} = require('./data')

app.get('/',(req,res)=>{
    //res.json(products)
    // only want id name
    const t = products.map(obj => {
        const {id ,name} = obj
        return {id, name}})
    res.send(t)
    
})
app.get(`/1`,(req,res)=>{
    //res.json(products)
    // only want id name
    const t = products.filter(obj => {
        return 1 === obj.id    
    })
    res.send(t)
    
})
app.listen(8080)