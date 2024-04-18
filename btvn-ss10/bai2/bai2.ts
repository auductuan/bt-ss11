class Employee {
    constructor(public employeeName: string, protected company: string, private phone: string) {}
    printInfo(): void {
        console.log("Name:", this.employeeName);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}
class Manager extends Employee {
    constructor(employeeName: string, company: string, phone: string, public teamSize: number) {
        super(employeeName, company, phone);
    }
    printInfo(): void {
        super.printInfo();
        console.log("Team Size:", this.teamSize);
    }
}
const manager = new Manager("Tung", "mtp Company", "0123456789", 19);
manager.printInfo();



