// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    // Turn the input into a string, split the string and remove space, sort the string in ascending order, reverse the order so the highest number are first and lowest are last, join the string, wrap it in Number() to convert string back into a number
    return Number(String(n).split('').sort().reverse().join(''))
}