//var is function scoped
//let is block scoped
//const is block scoped and readonly

function doSomething(num) {
    i = 10; //global variable DO NOT USE IT
    if(num %2 == 0) {
        const message = "Even";
        //message = num + " is even";
    }
    //console.log(message);
}

doSomething(12);
console.log(i);