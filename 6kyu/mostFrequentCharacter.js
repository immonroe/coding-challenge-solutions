// Most Frequent Character

// Given a string of characters, return the character that appears the most often.
// If two characters have the same amount of characters in string, return the one that appears first.

function mostFreqChar(str) {
    // TODO have fun (:
    // hashmap
    const charMap = {
        // h: 1
        // e: 1
        // l: 2
        // o: 1
    }
    let maxCount = 0
    let maxChar = ''

   

    for (let char of str) {
        // if key doesn't exists (str[i] - creating it and setting value to 1)
        // if key does exists (reading our object, finding the exisitng value, and incrementing value by 1)
        charMap[char] = charMap[char] + 1 || 1
    }

    for (let char in charMap) {
        // check values in for loop to see which is largest
        // Whenever value is larger than what's stored in maxCount, maxCount = value/maxChar = key
        if (charMap[char] > maxCount) {
            maxCount = charMap[char]
            maxChar = char
        }
    }

    // returning our answer
    return `${maxChar} - ${maxCount}`
    // l - 2
}

// hello

// We are receiving a string, we are trying to find the character that appears the most times in the string
// Will numbers be involved?
// Will I always be receiving a string?
// Would you like to count puncuation as a character?

// mostFreqChar("abracadabra") // 'a' => 5
// mostFreqChar("why") // 'w' => 1
// mostFreqChar("opposite") 'o' => 2