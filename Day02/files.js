let fs = require("fs");

//async
fs.readFile(__dirname + '/training.txt', (err, data) => {
    if(!err) {
        console.log(data.toString());
    }
});
console.log('Done');


//let response = fs.readFileSync(__dirname + '/training.txt');
//console.log(response.toString());

//fs.writeFileSync(__dirname + '/training.txt', 'Welcome to NodeJS Training');

