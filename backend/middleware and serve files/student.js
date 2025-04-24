class Student {
    static currentId = 1; // Static variable to keep track of the current ID
    constructor(name) {
        this.id = Student.currentId++; // Assign the current ID, then increment
        this.name = name;
    }
}
module.exports = Student;