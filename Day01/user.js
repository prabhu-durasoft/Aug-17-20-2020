//CommonJS
//require('./mylib.js');
var sub = require('./mylib.js').subtract;
var add = require("./mylib.js").add;
var MyMath = require('./myMath.js');

var sum = add(10, 2)
var diff = sub(10, 2);
console.log(sum, diff);

MyMath.add(10, 2);
MyMath.subtract(10, 2);
console.log(MyMath.PI);
//raw es6
//import add from './mylib.js'
//import subtract from './mylib.js'
