/*
Find Second Largest distinct element in the array.

Corner Cases - 
    - Empty Array
    - Array conatins single element
    - Array contains Negative Elements
    - Array contains Duplicates.

Constraints -
    - Time Complexity  - O(n)
    - Space Complexity - O(1)

Technique Used - Single Pass Scan (Linear Scan)

*/

var secondLargest = function (arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  if (arr.length < 2) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  return secondMax === -Infinity ? -1 : secondMax;
};
