//closures
function parent() {
    let props = 'Properties of the Parent';

    return function() {
        console.log(props);
    }
}

let child = parent();
child();

function increment() {
    let num = 0;
    return function() {
        num++;
        return num;
    }
}
let incrementer = increment();
console.log(incrementer());
console.log(incrementer());
console.log(incrementer());


let incrementer2 = increment();
console.log(incrementer2());
console.log(incrementer2());
console.log(incrementer2());

