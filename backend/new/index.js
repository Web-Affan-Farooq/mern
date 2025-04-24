const express = require('express');
const morgan = require('morgan');
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

// app.use((req,res,next) => {
//     console.log("person authenticated");
//     next();
// })
// app.use((req,res,next) => {
//     console.log("person is muhammad affan");
//     next();
// })

// app.use(morgan('combined'))   // morgan middleware
// app.use(morgan('dev'))   // morgan middleware
// app.use(morgan('common')) // morgan middleware
// app.use(morgan('short')) // morgan middleware
// app.use(morgan('tiny')) // morgan middleware

app.get('/',(req,res,next) => {
    console.log("Person authenticated");
    next();
}, (req,res) => {  //implementing custom middlewares
    res.render("index",{data:"hello-2"});
})

app.get('/forms', (req,res) => {
    res.render("forms");
});

app.listen(5500, () => {
    console.log("server is running on port 5550")
})