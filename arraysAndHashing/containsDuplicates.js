class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()
        for (const element of nums) {
            if (seen.has(element)) {
                return true
            }
            seen.add(element)
        }
        return false
    }
}