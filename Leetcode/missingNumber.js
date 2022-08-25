// 268. Missing Number 
// Easy
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
var missingNumber = function(nums) {
    if(nums.length === 0) {
       return 0;
   }
   const val = nums.reduce((a, r) => a+r);
   console.log(val)
   const n = nums.length;
   return Math.trunc((n * (n+1))/2) - val;
};
const arr =[3,0,1]
console.log(missingNumber(arr))