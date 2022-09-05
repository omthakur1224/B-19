const fs = require('fs');

let text='hi this is om'

let file = fs.readFileSync('./',{encoding:'utf-8'});
console.log(file)
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });