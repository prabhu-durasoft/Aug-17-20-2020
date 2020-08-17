const greet = function(name) {
    console.log("Hi " + name);
}

// function greet(name) {
//     console.log("Hello " + name);
// }

greet("Sam");

//Higher-order function
function work(arg) {
    arg();
}
function eat() {
    console.log("Eating");
}
let sleep = function() {
    console.log("Sleeping");
}
work(eat); //work(eat())
work(sleep);
work(function() {
    console.log("Inline");
});
function confuse() {
    return function() {
        console.log("confused");       
    };
}
confuse()();

function print() {
    console.log("printing", arguments);
}

print("Hello");
print("Hi", "How", "are", "you")
print("sleeping", 24, 7);
print([1, 2, 3, 4])