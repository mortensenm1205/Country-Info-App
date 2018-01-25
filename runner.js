// console.log(`Hello ${process.argv[2]}`);

var fs = require('fs');

fs.readFile('./countries.json', 'utf8', function(err, data){
  var ourJason = JSON.parse(data);
  var ourCountry;
  for(var index in ourJason) {
    if(ourJason[index].name === process.argv[2]) {
      ourCountry = ourJason[index].name;
    }
  };
  console.log(ourCountry);
});
