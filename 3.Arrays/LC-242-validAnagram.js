/* 
LeetCode - 242 - Valid Anagram 
*/
function anagram(str1, str2) {
  if (str1.length !== str2.length) return "Not anagram";

  let map = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (!map.has(str1[i])) {
      map.set(str1[i], 1);
    } else {
      map.set(str1[i], map.get(str1[i]) + 1);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!map.has(str2[i])) {
      return "Not Anagram";
    } else {
      map.set(str2[i], map.get(str2[i]) - 1);
      if (map.get(str2[i]) < 0) {
        return "Not Anagram";
      }
    }
  }
  for (let val of map.values()) {
    if (val != 0) return "Not Anagram";
  }
  return "Anagram";
}
