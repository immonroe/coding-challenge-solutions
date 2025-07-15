# Given an integer array nums and an integer k, return the k most frequent elements within the array.

# The test cases are generated such that the answer is always unique.

# You may return the output in any order.

# Example 1:

# Input: nums = [1,2,2,3,3,3], k = 2

# Output: [2,3]
# Example 2:

# Input: nums = [7,7], k = 1

# Output: [7]
# Constraints:

# 1 <= nums.length <= 10^4.
# -1000 <= nums[i] <= 1000
# 1 <= k <= number of distinct elements in nums.

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {} # keys are numbers from nums, values are how often number appears
        freq = [[] for i in range(len(nums) + 1)] # builds list (buckets) of empty lists

        for n in nums:
            count[n] = 1 + count.get(n,0) # Grab n or set default value of zero
        for n,c in count.items(): # all key/value pairs and sorting the bucket
            freq[c].append(n)

        res = []

        # iterate in descending order until our res list == k
        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res