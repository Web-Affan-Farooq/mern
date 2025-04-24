const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 5500;

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/",(req,res) => {
    res.render("index");
})
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})
setTimeout( function abort() {
    process.exit();
},120000);