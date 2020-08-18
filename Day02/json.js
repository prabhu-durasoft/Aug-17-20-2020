let model = 'Santro';
let year = 2015;

let car = {
    //model: model,
    //year: year,
    //drive: function() {}
    model,
    year,
    drive() {
        console.log('Driving ' + this.model);
    }
};
console.log(car);
car.drive();



// let car = new Object();
// car.model = 'BMW';
// car.year = 2020;
// car.drive = function() {
//     console.log('Driving');
// }
// console.log(car);