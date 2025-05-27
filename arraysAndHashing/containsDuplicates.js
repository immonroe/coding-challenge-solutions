// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // create set
        const seen = new Set()
        // loop through arr of nums
        for (const element of nums) {
            // use .has() method to check if value in set exists
            if (seen.has(element)) {
                return true
            }
            // if it doesn't, add it - make sure to keep this within scope of for loop
            seen.add(element)
        }
        // if condition is not met return false
        return false
    }
}