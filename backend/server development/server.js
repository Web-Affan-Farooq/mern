const fs = require('fs');
const express = require('express');
const path = require('path');
const exp = require('constants');
const PORT = process.env.PORT || 5500;
const users = require("./MOCK_DATA.json");

const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})
setTimeout(() => {
    process.exit();
},120000);
