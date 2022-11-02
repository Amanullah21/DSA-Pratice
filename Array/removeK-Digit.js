// possible integer after removing k digits from num.

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
let num = "10200",
  k = 1;
let i = 0,
  stack = [],
  reg = /[1-9]/;

while (i < num.length) {
  let curr = num[i];
  while (k > 0 && stack.length && stack[stack.length - 1] > curr) {
    stack.pop();
    k--;
  }
  stack.push(curr);
  i++;
}
while (k-- > 0) stack.pop();
let res = stack.join("");
if (reg.test(res)) return console.log(res.replace(/^0+/, ""));
return "0";
