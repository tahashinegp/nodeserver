const express= require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router= express.Router()
const db = 'mongodb://tahashin:duet365@ds027308.mlab.com:27308/eventsdb'

mongoose.connect(db,err => {

    if(err){
        console.error("not connected")
    }
    else{
        console.log("eonnected")
    }
})

router.get("/",(req,res)=>{

    console.log("Form api route");

})

module.exports=router  // for making functian global

