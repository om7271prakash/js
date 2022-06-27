let a;

// block statement
{
    let a = 10;
    console.log(a);
    a = 20;
}
console.log(a);

// single statement 
if(true) true;

var b = 10;

if(true){
    var b = 30;
}

// var b has shadowed...
console.log(b);

function run(){
    var b = 40;
    console.log(b);
}
run();
// var b has shadowed...
console.log(">>>", b);