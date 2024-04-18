"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log("Name:", this.name);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
}
const student = new Student("thanh tung", 123);
student.displayInfo();
