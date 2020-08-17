/*
Create an array of numbers 1, 2, 3, 4, 5, 6, 30, 56, 84, 23, 100

1) Print all the numbers
2) Print the sum of all numbers
3) Print the first odd number
4) Generate an list of squares of all numbers
5) Generate a list of numbers divisible by 5. 
6) Print all the even numbers
*/
let numbers = [1, 2, 3, 4, 5, 6, 30, 56, 84, 23, 100];

let print = function(num){
    console.log(num);
}
numbers.forEach(print);

console.log();
const sum = numbers.reduce(function(currentValue, nextValue) { 
    return currentValue + nextValue ;
});
console.log(sum);

console.log();
const firstOdd = numbers.find(function(num) {
    return num %2 != 0;
});
console.log(firstOdd);

console.log();
const squares = numbers.map(function(num){
    return num * num;
});
console.log(squares);

console.log();
const divBy5 = numbers.filter(function(num) {
    return num % 5 == 0;
});
console.log(divBy5);