/*
Sum of all elements of an array.
*/

var sumOfAllElementsOfArray = function(nums,n){
    if(n===0) return nums[0];

    return nums[n]+sumOfAllElementsOfArray(nums,n-1);
}

let arr=[1,2,3,4,5];
console.log(sumOfAllElementsOfArray(arr,arr.length-1))