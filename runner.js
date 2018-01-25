// console.log(`Hello ${process.argv[2]}`);

var fs = require('fs');

fs.readFile('./countries.json', 'utf8', function(err, data){
  var ourJason = JSON.parse(data);
  console.log(ourJason[3].name);
});
