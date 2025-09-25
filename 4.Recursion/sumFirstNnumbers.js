/*
Sum of first N numbers using recursion.
*/

var sumOfNNumbers = function (num) {
    if (num == 0) return num;
    return num + sumOfNNumbers(num - 1)

}