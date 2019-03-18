const mongose = require('mongoose')

const schema =mongose.Schema

const userSchema = new Schema({
    email: String,
    password: String
})

module.exports= mongose.model('user',userSchema,'users')