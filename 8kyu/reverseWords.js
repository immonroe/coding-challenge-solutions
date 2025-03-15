// Reverse Words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Go for it
    stringList = str.split(' ')
    const reversedList = stringList.map(str => str.split('').reverse().join(''));
    return reversedList.join(' ')
}