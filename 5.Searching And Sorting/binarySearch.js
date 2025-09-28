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

var binarySearch = function (arr, start, end, target) {
  if (arr.length === 0) return -1;
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] > target)
    return binarySearch(arr, start, mid - 1, target);
  else
    return binarySearch(arr, mid + 1, end, target);
};

