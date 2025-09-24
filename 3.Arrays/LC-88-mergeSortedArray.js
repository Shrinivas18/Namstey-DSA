/*
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

Constraints - 
    - nums1.length == m + n
    - nums2.length == n
    - 0 <= m, n <= 200
    - 1 <= m + n <= 200
    - -10^9 <= nums1[i], nums2[j] <= 10^9

Follow up: Can you come up with an algorithm that runs in O(m + n) time?

*/
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = nums1.length - 1; i >= 0; i--) {
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        }
        else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }

    return nums1;
};