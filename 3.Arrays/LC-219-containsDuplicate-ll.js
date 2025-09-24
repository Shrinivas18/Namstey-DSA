/*
Contains Duplicate II

Given an integer array nums and an integer k, return true if there are two 
distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Constraints - 
    - 1 <= nums.length <= 105
    - -109 <= nums[i] <= 109
    - 0 <= k <= 105
*/

var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (Math.abs(i - j) > k) {
            set.delete(nums[i]);
            i++;
        }
        if (set.has(nums[j])) return true;
        set.add(nums[j]);
    }
    return false;
};