// store numbers from  0-n using recursive function.

function storeNumbers(n, result = [], current = 0) {
  if (current > n) return result;           
  result.push(current);                     
  return storeNumbers(n, result, current + 1);
}
