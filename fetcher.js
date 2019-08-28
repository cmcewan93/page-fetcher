const request = require('request');
const fs = require('fs');
const rl = require('readline');
let args = process.argv.slice(2);

request(args[0], (error, response, body) => { 
  
  // fs.access(args[0], fs.f_OK, (err) => {
  //   if(err) {
  //     console.error(err)
  //     return;
  //   }
  //   rl.question('Are you sure you would like to overwrite the file? Y/N?', (answer) => {
  //     if(answer )
  //   })
  // })
  
  fs.writeFile(args[1], body, function (err) {
    if(err) throw err;
    console.log('file saved!')
  })
});
