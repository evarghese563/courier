//Load Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());

//Load Mongoose
const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');
require("./ctrack")
const ctrack = mongoose.model("Track")

// Mongoose Connect
mongoose.connect("mongodb+srv://trackdata:Eric0203@cluster0.ckj3x.mongodb.net/track?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',() =>
{
    console.log("MongoDb add courier database connection established successfully");
});

//view ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", (req, res) =>
    {  
        res.render("confirm"); 
    })

app.get("/:val",(req,res)=>{
    res.render("confirm");
});

//Search
app.post("/search", async(req, res) => {
    console.log("this is the data"+ req.body.t_no)
    res.send(true);
})

//localHost
app.listen(5001,() =>
{
    console.log("up and running -- this is our c service")
});



