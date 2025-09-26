/*
Sum of all odd elements of array.
*/

var sumOfOddElementsOfArray = function(nums,n){
    let isOdd = nums[n] % 2 !== 0;

    if(n === 0)
        return isOdd ? nums[0] : 0;
    
    return isOdd ? nums[n] + sumOfOddElementsOfArray(nums, n-1) : sumOfOddElementsOfArray(nums, n-1);

}

let arr = [1,2,3,4,5]
console.log(sumOfOddElementsOfArray(arr, arr.length-1))