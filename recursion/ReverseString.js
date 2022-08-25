let ans = "";
const reverseString = (str, length) => {
  if (str.length == length) {
    return;
  }

  reverseString(str, length + 1);
  ans += str[length] + " ";
  return ans;
};
const str = "amanullah";
console.log(reverseString(str, 0));

// console.log(5 * "*");
