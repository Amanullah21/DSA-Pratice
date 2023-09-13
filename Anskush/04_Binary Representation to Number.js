// Binary Representation to Number
// Given a binary string, output the integer so formed.

// Note: Output the number so formed after converting the binary representation to the Integer

// Sample Input
const str = "00000000000000000000000000000111";
// Sample Output
// 7
// Sample Explanation
// Self Explanatory
// Expected Time Complexity
// O(1), constant time complexity

// Expected Space Complexity
// O(1), constant space complexity

// Constraints
// 1<= length of binary string <= 32

const binaryToNumber = (str) => {
  console.log(parseInt(str, 2));
};
binaryToNumber(str);
