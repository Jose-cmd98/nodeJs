const http = require('http'); //import from node to use this modules

const hostname = "127.0.0.1"; //create an const to use localhost as a test
const port = 3000; //choosing port 3000 to use from that


const server = http.createServer((req,res)=>{  //callback


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('Hey there!')
})


server.listen(port,hostname,()=>{ //
    console.log('ServerWorks');
})