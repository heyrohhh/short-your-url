const mongoose = require('mongoose');


    const urlScheema = new mongoose.Schema({
        shortId:{
            type: String,
            required: true,
            unique: true,
        },
        redirectURL:{
            type: String,
            required: true,
        },
        visitURL: [{
            timestamp: { type: Number, } 
        }],
    }, {timestamp: true})
    


const URL = mongoose.model("url", urlScheema);


module.exports = URL;