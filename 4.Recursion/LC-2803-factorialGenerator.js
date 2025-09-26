/*
Generate Factorial of given input.
*/

var factorialGenerator = function(n){
    if(n<0) return -1;

    if(n === 0) return 1;

    return n * factorialGenerator(n-1);
}