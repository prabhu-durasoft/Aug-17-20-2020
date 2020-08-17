//Case sensitive
//semi-colon is optional
//dynamically-typed language

var i = 10;
var s = "hello";
s = true;
s = 12.34;
s = 'bye';
var x;
if (x == undefined)
    console.log("x is undefined");
else
    console.log(x);

var arr = [];
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
var coll = [1, 2, true, "string", null];

var i = undefined; //null
if(i) {
   console.log("i " + i); 
} else {
    console.log("i is null");
}
