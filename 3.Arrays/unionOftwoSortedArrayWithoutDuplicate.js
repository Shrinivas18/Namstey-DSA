/*
Given two sorted arrays arr1 and arr2, 
return a new array that represents the union of the two arrays without any duplicates.

Constraints - 
    - The resulting array must also be sorted in non-decreasing order.

Follow-up -
    - Can you solve it in O(n + m) time using the two-pointer technique?
    - Can you do it without using extra space (besides the output array)?
*/

// Approach 1 - [Two Pointers Technique] [Time Complexity - O(m+n)] [Space Complexity - O(n + m)]
const unionSortedArrays = function(nums1, nums2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
        } else if (nums1[i] > nums2[j]) {
            if (result.length === 0 || result[result.length - 1] !== nums2[j]) {
                result.push(nums2[j]);
            }
            j++;
        } else {
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        }
    }

    while (i < nums1.length) {
        if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
            result.push(nums1[i]);
        }
        i++;
    }

    while (j < nums2.length) {
        if (result.length === 0 || result[result.length - 1] !== nums2[j]) {
            result.push(nums2[j]);
        }
        j++;
    }

    return result;
};

// Approach 2 - [Two Pointers Technique] [Time Complexity - O(m+n)] [Space Complexity - O(1)]
function unionSortedArrays(nums1, nums2) {
    let i = 0, j = 0;
    const result = [];

    while (i < nums1.length && j < nums2.length) {
        let a = nums1[i], b = nums2[j];

        while (i > 0 && i < nums1.length && nums1[i] === nums1[i - 1]) i++;
        while (j > 0 && j < nums2.length && nums2[j] === nums2[j - 1]) j++;

        if (i >= nums1.length || j >= nums2.length) break;

        a = nums1[i];
        b = nums2[j];

        if (a < b) {
            result.push(a);
            i++;
        } else if (a > b) {
            result.push(b);
            j++;
        } else {
            result.push(a);
            i++;
            j++;
        }
    }

    while (i < nums1.length) {
        if (i === 0 || nums1[i] !== nums1[i - 1]) {
            result.push(nums1[i]);
        }
        i++;
    }

    while (j < nums2.length) {
        if (j === 0 || nums2[j] !== nums2[j - 1]) {
            result.push(nums2[j]);
        }
        j++;
    }

    return result;
}
