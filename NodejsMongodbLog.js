const express = require("express")
const app=express()
app.use('/',express.static('public'))
app.get("/",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
})
app.listen(0815)