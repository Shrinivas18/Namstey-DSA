/*
Find that single one.

Contraints -
    - 1 <= nums.length <= 3 * 104
    - -3 * 104 <= nums[i] <= 3 * 104
    - Each element in the array appears twice except for one element which appears only once.

Approach 1 - Use Hash Table - Time Complexity: O(n); Space Complexity = O(n)
Approach 2 - Using XOR - Time Complexity: O(n); Space Complexity = O(1)
*/

// Approach 1 - Using Hash Map -
var singleNumber=function(nums){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }
        else{
            map.set(nums[i],1)
        }
    }
    for(let [key,value] of map.entries()){
        if(value === 1) return key;
    }
}
// Approach 2 - Using XOR - (Tricky) Best aproach for this question
var singleNumber = function(nums) {
    let xor = 0;
    for(let num of nums){
        xor ^= num;
    }
    return xor;
};
