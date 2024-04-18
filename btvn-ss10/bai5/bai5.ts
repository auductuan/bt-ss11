class Parent {
    protected protectedProperty = "Protected Property";
    private privateProperty = "Private Property";
}

class Child extends Parent {
    childMethod(): void {
        console.log("Protected property in child:", this.protectedProperty);
    }
}

const child = new Child();
console.log(child.protectedProperty); // OK

