class Employee {
    constructor(public name: string, protected company: string, private phone: string) {}
    printInfo(): void {
        console.log("Name:", this.name);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}

class Manager extends Employee {
    constructor(name: string, company: string, phone: string, public teamSize: number) {
        super(name, company, phone);
    }
}

const manager = new Manager("Thanh tung", "mtp Company", "0123456789", 19);
manager.printInfo();
