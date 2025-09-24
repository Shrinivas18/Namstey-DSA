// 5️⃣ Reverse Integer

// Handles negative numbers too

function reverseInteger(n) {
  let sign = n < 0 ? -1 : 1;
  let reversed = parseInt(Math.abs(n).toString().split('').reverse().join(''));
  return sign * reversed;
}
