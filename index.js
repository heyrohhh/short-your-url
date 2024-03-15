const express = require('express');

const urlRoute = require('./routes/urlR');
const {connectionMongo} = require('./conncetion/connection');
const URL = require('./models/urlM');
const staticRouter = require('./routes/staticRoute')
const app = express();
const port = 8000;

// for connection with mongoDb
connectionMongo("mongodb://127.0.0.1:27017/shortURL-projectD")
.then(() => console.log("Mongodb Connected"));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// code for ejs elements

app.set("view engine", "ejs");

app.use("/", staticRouter)
app.use("/url", urlRoute)
app.get("/url/:shortid", async  (req,res) =>{
    try {
        const shortId = req.params.shortid;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitURL: { timestamp: Date.now() } } },
            { new: true }
        );

        if (entry) {
            // Safely access the redirectURL property
            res.redirect(entry.redirectURL);
        } else {
            console.error('Entry not found for shortId:', shortId);
            res.status(404).send('Not found');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
    
});
app.listen(port,()=> console.log(`server running on port ${port}`))