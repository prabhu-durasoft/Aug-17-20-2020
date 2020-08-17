let capitals2 = { "India": "ND"};
console.log(capitals2);

let numbers = [10, 20, 30];
console.log(numbers[0]);
console.log(numbers[10]); //NO ERROR

let capitals = [];
capitals["India"] = "New Delhi";
capitals["USA"] = "DC";
capitals["France"] = "Paris";
console.log(capitals);
for (var key in capitals) {
    console.log(key + ": " + capitals[key]);
}