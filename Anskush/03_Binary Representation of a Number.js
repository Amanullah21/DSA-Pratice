// Write a program to print Binary representation of a given number.

// Sample Input
N = 7;
// Sample Output
// 00000000000000000000000000000111
// Sample Explanation
// Self Explanatory
// Expected Time Complexity
// O(1), constant time complexity

// Expected Space Complexity
// O(1), constant space complexity

const binaryRepresentation = (n) => {
  let ans = n.toString(2);
  console.log(ans);
  let nn = ans.toString(10);
  console.log(nn);
};
binaryRepresentation(N);
