/*
Remove Duplicate elements from an sorted array and return number of unique elements.

Constraints -
    - Remove the duplicates in-place.
    - The relative order of the elements should be kept the same.
    - The length of array must not be altered.
*/

var removeDuplicates = function(nums){
    let p1 = 0;

    for(let i=1;i<nums.length;i++){
        if(nums[i] !== nums[p1]){
            p1+=1;
            nums[p1] = nums[i];
        }
    }
}