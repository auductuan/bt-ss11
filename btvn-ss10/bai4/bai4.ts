class Vehicle {
    constructor(protected name: string, protected speed: number, protected id: number) {}

    slowDown(amount: number): void {
        this.speed -= amount;
    }

    speedUp(amount: number): void {
        this.speed += amount;
    }

    showSpeed(): void {
        console.log("speed:", this.speed);
    }
}

class Bicycle extends Vehicle {
    constructor(name: string, speed: number, id: number, private gear: number) {
        super(name, speed, id);
    }

    showGear(): void {
        console.log("gear:", this.gear);
    }
}

const bicycle = new Bicycle("Bike", 30, 123, 4);
bicycle.showSpeed(); 
bicycle.showGear(); 

bicycle.speedUp(10);
bicycle.showSpeed();

bicycle.slowDown(5);
bicycle.showSpeed(); 
