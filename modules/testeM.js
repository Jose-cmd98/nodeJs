//using module created before
const moduletest = require('./moduletest');


//test module function to see if it works
moduletest.NewModule();

console.log(moduletest.nn);

console.log(moduletest.info.nome);
console.log(moduletest.info.sobrenome);
console.log(moduletest.info.idade);