const auth = (req,res,next) => {
    if(req.query.name==='supp')
    {
        req.user = {name:"supp",id:3}
    }
    else{
        res.status(401).send("access denied")
    }
    next();
}

module.exports = {auth}