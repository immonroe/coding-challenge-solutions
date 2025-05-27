// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false
// Explanation: "tabacat" is not a palindrome.

// Constraints:

// 1 <= s.length <= 1000
// s is made up of only printable ASCII characters.

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // isPalindrome('racecar') // true
        // isPalindrome('mom  mom') // true
        // isPalindrome('1 2 3 2 1 ') // true

        // eliminate all spaces and punctuation from str
        // compare the string to itself flipped
        // if the strings are identical, return true, if not return false
        let convert = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        return convert === convert.split('').reverse().join('')
    }
}
