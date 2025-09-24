/*
Return the only number in the range that is missing from the array.

Constraints - 
    - All the numbers of nums are unique.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

Approach 1 - using Sorting then finding the number; Time Complexity - O(n(logn))
Approach 2 - using sum of all integers formula - n*(n+1)/2; Time Complexity - O(n)
Approach 3 - using XOR; Time Complexity - O(n)
*/

// Approach 2
var missingNumber = function (nums) {
    let n = nums.length;
    let sum = n * (n + 1) / 2;
    let s = 0;
    for (let i = 0; i < n; i++) {
        s = s + nums[i];
    }
    const missing = sum - s;

    return missing;
};

// Approach 3
var missingNumber = function(nums) {
    let n = nums.length;
    let xor = 0;

    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }

    for (let num of nums) {
        xor ^= num;
    }

    return xor;
};