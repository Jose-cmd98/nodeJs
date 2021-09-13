//Creating function to use as module
function NewModule(){
    console.log('Module Works');
}


var n = 10


var obj = {nome:'José', sobrenome:'Sperandio', idade:'23'}
//exporting this to became a useage module
exports.NewModule = NewModule;

exports.nn = n;

//nn is an example to remember that I can use another name instead use the same to = n

exports.info = obj;