const fs = require('fs');


// fs.appendFile('read.txt','Jose', (err) =>{
//     if(err) throw err;
//     console.log('IT WORKS!');
// })

//reading file 
/*
fs.readFile('read.txt', (err,data)=>{
    // console.log(data.toString());

    //manipulating data

    let str = data.toString();

    // let newStr = str.substr(0, 7);

     let newStr = str.split('/'); //show as array

    console.log(newStr);
})*/


/* =>to del an file
fs.unlink('read.txt', (err)=>{
    console.log('Arquivo deletado!');
})*/


fs.rename('read.txt', 'newRead.txt', (err)=>{
    console.log('Arquivo renomeado!');
})