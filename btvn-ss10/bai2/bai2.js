"use strict";
class Employee {
    constructor(employeeName, company, phone) {
        this.employeeName = employeeName;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("Name:", this.employeeName);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}
class Manager extends Employee {
    constructor(employeeName, company, phone, teamSize) {
        super(employeeName, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log("Team Size:", this.teamSize);
    }
}
const manager = new Manager("Tung", "mtp Company", "0123456789", 19);
manager.printInfo();
