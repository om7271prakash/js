console.log("x: ", x);
console.log("getName: ", getName);
console.log("getName1: ", getName1);
console.log("getName2: ", getName2);

var x = 7;

function getName(){
    console.log('Hello World!');
}
var getName1 = function() {}
var getName2 = () => {}

// Output: 
// x:  undefined
// getName:  [Function: getName]
// getName1:  undefined
// getName2:  undefined