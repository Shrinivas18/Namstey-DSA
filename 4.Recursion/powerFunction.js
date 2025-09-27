/*
Power function - Compute x^n recursively.

Corner Cases - 
     - Handle negative powers
     - Handle extra recursive calls
*/

var powerFunction = function(x,n){
    if(n===0) return 1;

    if(n<0){
        return 1 / powerFunction(x,-n);
    }
    if(n % 2 === 0){
        let half = powerFunction(x, n/2);
        return half * half;
    }
    else{
        return x * powerFunction(x, n-1);
    }
}

console.log(powerFunction(2,10))