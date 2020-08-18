class Car {
    //class Engine {}
    //Instance variables cannot be defined here
    constructor(theModel, theYear) {
        class Engine {}
        //Instance variables
        this.model = theModel;
        this.year = theYear;
        Car.count = Car.count ? Car.count + 1 : 1;
        this.engine = new Engine(); //this.engine = {};
    }
    static getCount() {
        return Car.count;
    }

    //drive(miles) => {}
    
    drive(miles) {
        console.log("Driving " + this.model + " at " + miles + " mph");
    }

}
class SportsCar extends Car {
    constructor(theModel, theYear, thePower) {
        super(theModel, theYear);
        this.power = thePower;
    }
    drive(miles) {
        super.drive(miles);
        console.log("Driving sports car " + this.model);
    }

}

let s1 = new SportsCar("Mercedes", 2020, 4000);
s1.drive(350);
console.log(s1.engine);

let c1 = new Car("Bmw", 2020);
console.log(c1.model, c1.year);
c1.drive(100);

let c2 = new Car("Ferrari", 2019);
console.log(c2.model, c2.year);

console.log(Car.getCount());