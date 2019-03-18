const express= require('express')
const bodyParser = require('body-parser')
const api= require('.././route/api')  // loading module globally

const PORT=3000
const app = express()

app.use(bodyParser.json())

app.get('/', function(req,res){

    res.send('Hellow from the server')
})

app.listen(PORT,function(){

    console.log('Server is running' +PORT)
})

app.use('/api',api)