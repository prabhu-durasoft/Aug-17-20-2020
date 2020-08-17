function add(a, b) {
    return a + b;
}
// var sum = add(10, 20);
// console.log(sum);

function subtract(a, b) {
    return a - b;
}

var PI = 3.14;
module.exports.PI = PI;
module.exports.add = add;
module.exports.subtract = subtract;

//raw es6
/*
    export function add() {}
    export function subtract() {}
*/