// Load Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());

// Load Mongoose
const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');
require("./tid")
const TID = mongoose.model("ID")


// Mongoose Connect
mongoose.connect("mongodb+srv://trackid:Akki1116@cluster0.ckj3x.mongodb.net/track?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () =>
{
    console.log("MongoDb add TID database connection established successfully");
});

//view ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", (req, res) =>
    {  
        res.render("homePage"); 
})


//New Tracking Id
app.post("/track", (req, res) => {
    const newTrack = new tid({
        idno: req.body.TrackingNumber
    })


    newTrack.save().then(() => {
        console.log("New Tracking");
    }).catch((err) => {
        if(err){
            throw err;
        }    
    })
    res.send("Thank you for entering your Tracking ID");
})

//Search Tracking ID
app.post("/search", async(req, res) => {
    try{

        var data =((req.body.t_no));
        console.log("the no from us "+data); 
         TID.findOne({idno:data})
        .then((user)=>{ 
            console.log(user.idno);
            if (user.idno == data){
                res.send(true)
            }else{
                res.send(false)
            }
        }).catch(err=>{
            res.send(false);
        });
    }catch(error){
        res.status(400).send("Invalid ID");
    }
})



app.listen(5000,() =>
{
    console.log("up and running -- this is our c service")
});






