/* 
Level - Medium

Return Longest Substring Without Repeating Characters

Constraints - 
    - 0 <= s.length <= 5 * 104
    - s consists of English letters, digits, symbols and spaces.

Approach 1 - using nested for and checking for the item each time inside inner for.
Approach 2 - Using Set. Eliminating repeating character by moving each character to the right.
Approach 3 - Using Map. Jumping directly to the last index of repeating character and saving extra moves.

*/

// Approach 1 - [Brute Force][Worst][Time Complexity - O(n^3)]
var lengthOfLongestSubstring = function (s) {
    let longestSubstr = 0;

    for (let i = 0; i < s.length; i++) {
        let substr = "";
        for (let j = i; j < s.length; j++) {
            if (substr.includes(s[j])) {
                break;
            }
            else {
                substr += s[j];
                longestSubstr = Math.max(longestSubstr, substr.length)
            }
        }
    }
    return longestSubstr;
};

// Approach 2 - [Sliding Window Technique][Optimal][next to best][Time Complexity - O(2n) -> O(n)][Space Complexity - O(n)]
var lengthOfLongestSubstring = function (s) {
    let length = 0;
    let left = 0;
    let set = new Set();

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++;
        }
        
            set.add(s[right]);
            length = Math.max(length, right - left + 1);
        
    }
    return length;
};

// Approach 3 - [Sliding Window Technique][Optimal][Best]
var lengthOfLongestSubstring = function (s) {
    let length = 0;
    let left = 0;
    let map = new Map();

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left); 
        }
        map.set(s[right], right);

        length = Math.max(length, right - left + 1);
    }

    return length;
};