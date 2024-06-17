require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { sendMail } = require("./hooks/emailFunction");
// const bodyParserTwo = require("express").json;


const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
// app.use(bodyParserTwo());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/contact',(req,res)=>{
    // console.log(req.body)
    sendMail(req.body);
    res.redirect('/');
});


app.listen(process.env.PORT,()=>{
    console.log(`Portfolio app is running on port ${process.env.PORT}`);
})