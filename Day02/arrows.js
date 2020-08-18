//before arrow functions
function doSomething() {
    this.name = "Sam";
    var self = this;
    button.onclick = function() {
        console.log(self.name); //this won't be available
    }
    button.onclick = () => {
        console.log(this.name);
    }
}

this.model = "Uber";

let car = {
    model: "BMW",
    year: 2020,
    driveNormally() {
        console.log("Driving normally " + this.model, this);
    },
    //NOT RECOMMENDED AT ALL
    driveStupidly: () => {
        console.log("Driving stupidly " + this.model, this);
    }
}
car.driveNormally();
car.driveStupidly();