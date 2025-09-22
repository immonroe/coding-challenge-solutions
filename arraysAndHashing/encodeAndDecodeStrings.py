# Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

# Please implement encode and decode

# Example 1:

# Input: ["neet","code","love","you"]

# Output:["neet","code","love","you"]
# Example 2:

# Input: ["we","say",":","yes"]

# Output: ["we","say",":","yes"]
# Constraints:

# 0 <= strs.length < 100
# 0 <= strs[i].length < 200
# strs[i] contains only UTF-8 characters.

class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ''
        for s in strs:
            res += str(len(s)) + '#' + s # concat # sign to str character
        return res
    
    def decode(self, s: str) -> List[str]:
        res,i = [],0

        while i < len(s): # iterate over entire encoded str
            j = i
            while s[j] != '#': # find where the # is
                j+= 1
            length = int(s[i:j]) # everything between i and j is the number (the length of the word)
            res.append(s[j + 1 : j + 1 + length]) # slice out the actual word
            i = j + 1 + length # move i forward to the next encoded word
        return res