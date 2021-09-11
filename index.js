const http = require('http'); //import from node to use this modules
const fs = require('fs') //use to read an html file





const hostname = "127.0.0.1"; //create an const to use localhost as a test
const port = 3000; //choosing port 3000 to use from that

/*create new file 
fs.writeFile('node.txt', 'teste danki code', (err)=>{
 if(err) throw err;
    console.log('Arquivo criado com sucesso!');
})
*/


//create new file or insert the content after wht already exists.
fs.appendFile('node.txt', '\n Outro conteúdo', (err)=>{
    if(err) throw err;
    console.log('Salvo novamente!')
})


const server = http.createServer((req,res)=>{  //callback

    console.log(req.headers);// req information

    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data); //data has the content from html
        return res.end(); //finish and serve to the user the req
    })    //IT WORKS!

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');

    // res.end('Hey there!')
})


server.listen(port,hostname,()=>{ //
    console.log('ServerWorks!');
})