/*
class Car {
    constructor(_model, _year) {
        this.model = _model;
        this.year = _year;
    }
    drive() {
        console.log("Driving " + this.model);
    }
}
class SportsCar extends Car {
    constructor(_model, _year, _power) {
        super(_model, _year);
        this.power = _power;
    }
    race() {}
}
*/
function Car(_model, _year) {
    this.model = _model;
    this.year = _year;
    this.drive = function() {
        console.log("Driving " + this.model);
    }
}
Car.prototype.drive = function() {
    console.log("WTH");
}
Car.prototype.race = function() { //Car.__proto__.race = function() {...}
    console.log("Racing with " + this.model);
}
Car.prototype.power = 1800; //Car.__proto__.power = 1800

let c1 = new Car("BMW", 2020);
console.log(c1.__proto__);
c1.drive();
c1.race();
//console.log(c1.power);
