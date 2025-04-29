// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Constraints:

// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.

// use bucket sort but rather than use all numbers/count do count (or freq)/arr to store numbers that match freq
// This will make it so your bucket doesn't have to go from 0 to n, instead the max value would be nums.length
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        const arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)])
        arr.sort((a,b) => b[0] - a[0])
        
        return arr.slice(0,k).map(pair => pair[1])
    }
}
