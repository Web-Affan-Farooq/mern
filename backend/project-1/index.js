const express = require('express');
const users = require('./MOCK_DATA.json');
const url = require('url');


const PORT = process.env.PORT || 5500; // ---------------------port
const app = express(); // -----------------------------------main app

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.get('/users', (req, res) => {
    const html =`<ul>${users.map((user)=> { `<li> ${user.first_name}</li>`}).join(" ")}</ul>`
    res.send(html)
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// //routes
// app.get('/api/users', (request, response) => {
//     return response.json(users);
// })
// app.get('/users', (request, response) => {
//     response.send(
//         `
//         <h1 text-align="center">Heading</h1>
//         <ul>
//         ${users.map((user) => `<li>${user.first_name}</li>`).join(" ")};
//         </ul>
//         `
//     );
// })

// app.route('/api/users/:id').get('/api/users/:id',(req,res) => {
//     const userId = Number(req.params.id);
//     const user = users.find(user => user.id === userId);
//     return res.json(user);
// })
// .patch((req,res) => {
//     //edit user with id
//     return res.json({status:"pending"})
// }).delete((req,res) => {
//     //delete user with id
//     return res.json({status:"pending"})
// });

// app.post('/api/users',(req,res) => {
//     return res.json({status:"pending"});
// })



// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT} `);
// })