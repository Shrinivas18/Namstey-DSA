/*
Binary Search
    - Binary Search works only on sorted arrays.
    - It repeatedly divides the search range in half:
        - Compare the target with the middle element.
        - If it's equal → you're done.
        - If it's smaller → search the left half.
        - If it's larger → search the right half.
        - Repeat until found or range is empty.
*/

// Using Iterative Method
var binarySearch = function(nums, target){
    if(nums.length === 0) return -1;

    let left = 0;
    let right = nums.length - 1;
    
    while(right >= left){
        let middle = Math.floor((left + right) / 2);
        if(nums[middle] === target) return middle;

        if(nums[middle] > target)
            right = middle - 1;
        else
            left = middle + 1;
    }

    return -1;
}

// Using Recursion Method
var binarySearch = function (nums, start, end, target) {
  if (nums.length === 0) return -1;
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (nums[mid] === target) return mid;
  else if (nums[mid] > target)
    return binarySearch(nums, start, mid - 1, target);
  else
    return binarySearch(nums, mid + 1, end, target);
};