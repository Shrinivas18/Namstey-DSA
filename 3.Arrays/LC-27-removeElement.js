/*
Remove val from the array.

Constraints - 
    - Remove all occurrences of val in nums in-place.
    - Return the number of elements in nums which are not equal to val

    Technique Used - Two Pointers
*/

var removeElement = function(nums,val){
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
}