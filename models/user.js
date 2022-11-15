const mongose = require('mongoose');
const Schema = mongose.Schema;

// create shema

const userSchema = new Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String, 
        required:true
    },
    email: {
        type:String, 
        required:true
    },
    password: {
        type:String, 
        required:true
    },
});

module.exports = User = mongose.model("users", userSchema);