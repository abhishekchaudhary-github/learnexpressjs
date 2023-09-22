let {people} = require('../data')
const get = (req,res)=>{
    res.status(200).json({success:true,data:people})}
const post = (req,res)=>{
    const nm = req.body.name
    people.push({id:people.length+1,name:nm})
    if(!nm) return res.status(400).json({success:false,msg:"enter name"})
    res.status(201).json({success:true,person:nm})
}

const put = (req,res)=>{
    let k=0;
    people = people.map(peopl=>{
        if(peopl.id==req.params.id){
            k=1;
            return {id:req.params.id,name:req.body.name}
        }
        else return peopl
    })
    if(k==0){
        return res.status(400).send('no such id')
    }
    res.send('done')
}

module.exports = {
    get,put,post
}
