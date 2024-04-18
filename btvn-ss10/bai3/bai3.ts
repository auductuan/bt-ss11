class Person {
    constructor(public name: string) {}

    displayInfo(): void {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name: string, public id: number) {
        super(name);
    }
}

const student = new Student("thanh tung", 123);
student.displayInfo();
