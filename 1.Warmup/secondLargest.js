// 1️⃣ Second Largest in Array
// Approach: Single pass, no sorting/

function secondLargest(arr) {
  let largest = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }
  return second === -Infinity ? -1 : second;
}
