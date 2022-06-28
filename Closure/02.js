// using let
function x(){
    for(let i = 1; i <= 5; i++){
        setTimeout(() => {
            console.log("let>>> ", i);
        }, i*1000);
    }
}
x();

// using var
function y(){
    for(var i = 1; i <= 5; i++){
        function closure(i){
            setTimeout(() => {
                console.log("var>>> ", i);
            }, i*1000);
        }
        closure(i);
    }
}
y();