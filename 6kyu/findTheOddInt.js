// Find The Odd Int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// https://dev.to/bladesensei/xor-operator-in-programming-use-case-34ng
function findOdd(A) {
    //happy coding!
    return A.reduce((a, b) => a ^ b);
}

// longer version of solution
// function findOdd(A) {
//     const occurencesTable = [];
  
//     A.forEach(number => {
//       const exist = occurencesTable.find(occurence => {
//         return occurence[0] === number;
//       });
  
//       if (!exist) {
//         occurencesTable.push([number, 1]);
//       } else {
//         exist[1] = exist[1] + 1;
//       }
//     });
  
//     const odd = occurencesTable.find(occurence => {
//       return (occurence[1] % 2 !== 0)
//     });
//     return odd[0];
// }