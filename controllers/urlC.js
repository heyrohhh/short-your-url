const shortId = require('shortid');
const URL = require('../models/urlM')

// generating new url
async function generatenewurl(req,res){
const body = req.body;
if(!body.url) return res.status(400).json({err: "url is required"})
 const shortID = shortId();
 await URL.create({
   shortId: shortID,
    redirectURL: body.url,
    visitURL: [],
 });
 return res.render("home", { id: shortID});
 
}


module.exports = {
    generatenewurl,
    
}