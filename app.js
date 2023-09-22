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

// const express = require('express')
// const app = express();
// const {products} = require('./data')
// const {auth} = require('./fakeAuth')

// app.use(auth)

// app.get('/query',(req,res)=>{
//     const x = req.query;
//     let t;
//     if(x.search){
//         t = products.filter(ob=>{
//             if(ob.name.startsWith(x.search))
//             return ob;
//         })}

//     if(x.limit){
//         var j = x.limit;
//             t = products.slice(0,x.limit)
//         }
//     if(t.length==0){
//         return res.status(200).json({success:true, data:[]})
//     }

//     res.send(t)
//     })

//     const logger = (req,res,next) =>{
//         console.log(req.url)
//         next()
//     } 

// app.get('/',(req,res)=>{
//     //res.json(products)
//     // only want id name
//     const t = products.map(obj => {
//         const {id ,name} = obj
//         return {id, name}})
//     res.send(t)
    
// })
// app.use(logger)
// app.get(`/:id`,(req,res)=>{
//     //res.json(products)
//     // only want id name
//     const t = products.filter(obj =>  req.params.id == obj.id )
//     if(t.length===0){
//         res.status(404).send('<h2>Page Not Found</h2>')
//     }
//     res.send(t)
    
// })
// app.listen(8080)

const express = require('express')
const app = express() 
const api  = require('./routes/api')
const logger = (req,res,next) => {
    if(req.body.name){
        res.status(200).send(`welcome ${req.body.name}`)
    }
    else
    res.status(401).send('type')
}
app.use('/api/people',api)
app.use(express.urlencoded({ extended: true }))
app.post('/login',logger,(req,res)=>{
})
app.use(express.static('./methos'));
app.listen(8080)