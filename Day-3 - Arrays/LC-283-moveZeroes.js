/*
Move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Constraints - 
    - In place
*/

var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }

    return nums;
};

