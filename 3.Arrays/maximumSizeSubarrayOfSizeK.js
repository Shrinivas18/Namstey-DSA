/*
Return Maximum sum of subarray of size k

Technique used - sliding window approach for fixed-size subarray.

Follow-up: Can you solve it in O(n) time?

*/

var maxSumSubarrayOfSizeK = function (nums, k) {
    if (k > nums.length) return null;

    let windowSum = 0;
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    maxSum = windowSum;

    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
};
