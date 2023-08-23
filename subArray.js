const arr = "abcdef";
let max = 0;
for (let i = 0; i < arr.length; i++) {
  let ans = "";
  for (let j = i; j < arr.length; j++) {
    ans += arr[j];
    console.log(ans);
    // max = Math.max(max, ans.length);
  }
  console.log(max);
}

console.log("------------------");
const subArray = (arr, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      sum = "";
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      console.log(sum);
    }
  }
};
subArray(str, str.length);
