// This file refers to schema . schema is defined as the unique properties that should each data set have

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName:String,
        email:String,
        passsword:String,
        age:Number,
        gender:{
            type:String,
            enum:['male', 'female']
        }
    }
);