const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    user_email:{
        type:String,
        required: true,
        unique: false,
    },
    telephone: {
        type: Number,
        required: true,
        unique: false,

    },
    wilaya1: {
        type: String,
        required: true,
        unique: false,
    },
    wilaya: {
        type: String,
        required: true,
        unique: false,
    },
    commune: {
        type: String,
        required: true,
        unique: false,
    },
    poids: {
        type: Number,
        required: true,
        unique: false,

    },

    type_denvoie: {
        type:String
    },
    total:{
        type:Number,
        required:true,
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;