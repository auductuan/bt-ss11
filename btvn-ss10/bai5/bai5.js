"use strict";
class Parent {
    constructor() {
        this.protectedProperty = "Protected Property";
        this.privateProperty = "Private Property";
    }
}
class Child extends Parent {
    childMethod() {
        console.log("Protected property in child:", this.protectedProperty);
    }
}
const child = new Child();
console.log(child.protectedProperty); // OK
