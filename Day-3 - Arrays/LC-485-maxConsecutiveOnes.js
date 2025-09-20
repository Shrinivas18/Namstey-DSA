/*
Maximum number of consecutive 1's in the array.

Constraints -
    - 1 <= nums.length <= 105
    - nums[i] is either 0 or 1.
    
*/
var findMaxConsecutiveOnes = function(nums) {
    let currentCount = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
        currentCount++;
      } else {
        maxCount = Math.max(currentCount, maxCount);
        currentCount = 0;
      }
    }
    return Math.max(maxCount, currentCount);
};