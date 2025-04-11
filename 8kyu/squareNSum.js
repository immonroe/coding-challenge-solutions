// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return


function squareSum(numbers){
    total = 0
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i] ** 2
    }
    return total
}