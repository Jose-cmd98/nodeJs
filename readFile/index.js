const fs = require('fs');

// fs.appendFile('read.txt','Jose', (err) =>{
//     if(err) throw err;
//     console.log('IT WORKS!');
// })

fs.readFile('read.txt', (err,data)=>{
    console.log(data.toString());
})