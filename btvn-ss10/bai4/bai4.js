"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log("speed:", this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showGear() {
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
