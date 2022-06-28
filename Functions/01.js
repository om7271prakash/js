// Function Statement
function a() {
    console.log('a called');
}

// Function Expression
var b = function(){
    console.log('b called');
}

// Difference between Func statement and Func statement is Hoisting

// Function Declaration => Function Statement

// Anonymous Function

(function(){

});       // Used as value

// Named Function Expression

var c = function xyz(){
    console.log('c called.');  
}
// xyz()  gives reference error but c() run successfully


// First Classs function / First Class citizens
// - Ablity to use function as value is known as First Class Function

function sortArr(arr){
    return arr.sort();
}

function callback(func, arr){
    return func(arr);
}

let sortedArr = callback(sortArr, [5,3,7,9,3,5,7,2]);

console.log(sortedArr);