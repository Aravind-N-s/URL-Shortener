const mongoose = require('mongoose')
const validator = require('validator')
const sh = require('shorthash')
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema

const shortenedURLSchema = new Schema({
    original_url: {
        type: String,
        required: true,
        unique:true,
        validate: {
            validator: function(value){
                return validator.isURL(value)
            },
            message: function(){
                return 'invalid URL format'
            }
        },
    },
    hashed_url: {
        type: String,
        index: true
    },
    city:[{
        type: String,
        default: 'Global'
    }],
    location:[{
        lat:{
            type: String
        },
        long:{
            type: String
        }
    }],
    ipType:[{
        type:String
    }],
    ipAddress:[{
        type: String,
        default: ""
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    trackingTime:[{
        type: Date
    }]  
})

shortenedURLSchema.pre('save', function(next) {
    const data = this
    data.hashed_url = sh.unique(data.original_url)
    next();
});

shortenedURLSchema.plugin(uniqueValidator, { message: "User Already Exists" });

const ShortenedURL = mongoose.model('shortenedURL', shortenedURLSchema)

module.exports = {ShortenedURL}