/*
Return Sum of digits
*/

var sumOfDigits = function(n){
    if(n===0) return n;
    let temp = n % 10;
    return temp + sumOfDigits(Math.floor(n/10));
}