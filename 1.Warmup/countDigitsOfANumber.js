// 3️⃣ Count Digits of a Number

function countDigits(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
