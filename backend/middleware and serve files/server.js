const express = require('express');
const studentList = require("./data.json");
// const Student = require("./student");
const fs = require('fs');

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("hello world");
})
app.post("/add", (req, res) => {
    const newStudent = {
        id: studentList.length + 1,
        name: req.body.name,
        course: req.body.course,
        gender: req.body.gender,
        password: req.body.password
    };
    studentList.push(newStudent);
    fs.writeFile('./data.json', JSON.stringify(studentList, null, 2), (err) => {
        if (err) {
            console.error("Error writing to data file", err);
            res.status(500).send("Error adding student");
            return;
        }
        res.send("Student added successfully");
    });
});

app.post("/search", (req, res) => {
    res.send(studentList.find(student => student.password === req.body.password));
})
app.delete("/delete", (req, res) => {
    const required = studentList.find(student => student.password === req.body.password);

    // Check if student exists
    if (!required) {
        return res.status(404).send("Student not found");
    }

    // Remove student from list
    const index = studentList.indexOf(required);
    studentList.splice(index, 1);

    // Write updated list back to data.json
    fs.writeFile("./data.json", JSON.stringify(studentList, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return res.status(500).send("Error deleting student");
        }
        res.send("Student deleted successfully");
    });
});

app.listen(5500, () => {
    console.log(`Server is running on port5500 `);
});
// create a student managemnt system