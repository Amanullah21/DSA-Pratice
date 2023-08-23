const arr = "cabcdefdskjhfsifa";
let n = arr.length;
let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    let ans = "";
    for (let k = i; k <= j; k++) {
      ans += arr[k];
    }
    // console.log(ans);
    if (
      (ans[0] == "a" ||
        ans[0] == "e" ||
        ans[0] == "i" ||
        ans[0] == "o" ||
        ans[0] == "u") &&
      (ans[ans.length - 1] == "a" ||
        ans[ans.length - 1] == "e" ||
        ans[ans.length - 1] == "i" ||
        ans[0] == "o" ||
        ans[0] == "u")
    ) {
      max = Math.max(max, ans.length - 2);
    }
  }
}
console.log(max,n);

const maxSubarrayValue = (n, str) => {
  let first = 0;
  let last = 0;
  for (let i = 0; i < n; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      first = i;
      break;
    }
  }
  for (let i = 0; i < n; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      last = i;
    }
  }
  console.log(last - first);
};
maxSubarrayValue(arr.length, arr);
