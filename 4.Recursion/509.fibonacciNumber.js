/* 
Return Fibonacci number at Nth place.

Note - Naive Recursion - calculate again and again the same thing
*/

var fibonacci = function(n){
    if(n<=0) return 0;
    if(n===1) return 1;

    return fibonacci(n-1) + fibonacci(n-2);
}