const express = require('express');
const userModel = require('./usermodel');

const app = express();
app.get('/', (req, res) => {
    res.send("hello");
});

app.get('/create',async (req, res) => {
    let createdUser = await userModel.create(
        {
            name:"affan",
            email:"example@gmail.com",
            username:"muhammad",
        }
    );
    res.send(createdUser);
});

app.listen(5500, () => {
    console.log('Server is running on port 5500');
});