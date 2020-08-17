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

for(let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}

let sum = 0;
for(let i=0; i<numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum: " + sum);

for(let i=0; i<numbers.length; i++) {
    if(numbers[i] % 2 != 0) {
        console.log(numbers[i]);
        break;
    }
}

let lst = [];
for(let i=0; i<numbers.length; i++) {
    let square = numbers[i] * numbers[i];
    lst.push(square); 
}
console.log(lst);


let lst5 = [];
for(let i=0; i<numbers.length; i++) {
    if(numbers[i] % 5 == 0) {
        lst5.push(numbers[i]); 
        
    }
}
console.log(lst5);

for(let i=0; i<numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}