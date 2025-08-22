// 4️⃣ Palindrome Check

// Note: Works for numbers or strings.

function isPalindrome(str) {
  let rev = str.toString().split('').reverse().join('');
  return rev === str.toString();
}
