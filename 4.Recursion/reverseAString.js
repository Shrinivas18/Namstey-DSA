/*
Reverse a string
*/

var reverseString = function(str,n){
    if(n === 0) return str[0];

    return str[n] + reverseString(str,n-1);
}
