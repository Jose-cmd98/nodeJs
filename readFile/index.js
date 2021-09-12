// const fs = require('fs');
const readline = require('readline');

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

/* RENAME FILE
fs.rename('read.txt', 'newRead.txt', (err)=>{
    console.log('Arquivo renomeado!');
}) */

//create interface to use input|Output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//
rl.question('Qual seu nome?', (name)=>{
    console.log('O nome do Usuario é: ' +name);
    rl.question('Qual sua idade?',(idade)=>{
        console.log('A idade do '+name+ ' é ' +idade );

    rl.question('Qual seu foco de estudo?',(focus)=>{
        console.log('O sr.'+name+' de '+idade+' tem como foco de estudos '+focus);
    })
    })

})


//exit
rl.on('close',()=>{
    console.log('Finalizando!');
    process.exit(0);
})

