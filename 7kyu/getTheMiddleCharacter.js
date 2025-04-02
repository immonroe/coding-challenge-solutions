// Get the Middle Character

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    //Code goes here!
    if (s.length  == 1 || s.length == 2) {
        return s
    }
    if (s.length % 2 == 0) {
        return s[(s.length / 2) - 1] + s[s.length / 2]
    } else if (s.length % 2 == 1) {
        return s[(s.length - 1) / 2]
    }
}