// Detect Palindrome
// Description
// You are given a integernum.
// You need to printYesif that integer is a palindrome or else printNo.
// A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward, such asmadamorracecar.

// Input
// First line containsnum, a integer.
// Constraints
// 1 <= num <= 1000000

// Output
// PrintYesorNodepending upon the integer.
// Sample Input 1
// 1221
// Sample Output 1
// Yes

// Hint
// Sample 1 Explanation
// We printYesas1221`is a palindrome.

// function detectPalindrome(num) {
//   let out = "";
//   for (i = num.length - 1; i >= 0; i--) {
//     out += num[i];
//   }
//   if (num === out) console.log("Yes");
//   else console.log("No");
// }
// detectPalindrome("112221");

// // 1st method
// console.log("method 1");
// const validPalindrome = (num) => {
//   let str = num + "";
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   console.log(rev == str);
// };
// validPalindrome(121);

// // 2nd Method
// console.log("method 2");
// const validPalindrome2 = (num) => {
//   let first = 0;
//   let str = num + "";
//   let last = str.length - 1;

//   while (first <= last) {
//     if (str[first] == str[last]) {
//       first++;
//       last--;
//     } else {
//       console.log(false);
//       return;
//     }
//   }
//   console.log(true);
// };
// validPalindrome2(111);

// console.log("Method 3rd ---");
// const validPalindrome3 = (num) => {
//   let str = num + "";
//   let rev = str.split("").reverse().join("");
//   console.log(rev == str);
// };
// validPalindrome3(123);

const validPalindrome4=(str)=>{
  return str == str.split('').reverse().join('')
}
console.log(validPalindrome4('12321'))
