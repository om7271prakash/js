// What is callback function in JavaScript

// setTimeout(function() {
//     console.log('timer');
// }, 3000);

// function x(y){
//     console.log("x");
//     y();
// }

// x(function(){
//     console.log("y");
// });

// console.log("last call");

// JavaScript is a synchronous and Single-threaded language

// Blocking the main thread

// Power of Callback?

// Deep about Event Listeners

function close() {
    let count = 0;
    document.getElementById('clickMe').addEventListener('click', function abc(){
        console.log("clicked>>", ++count);
    });
}
close();

// Closures Demo with Event Listners

// Scope Demo with Event Listeners

// Garbage Collection & removeEventListeners