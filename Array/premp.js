const arr = [
  "p",
  "e",
  "r",
  "f",
  "e",
  "c",
  "t",
  " ",
  "m",
  "a",
  "k",
  "e",
  "s",
  " ",
  "p",
  "r",
  "a",
  "c",
  "t",
  "i",
  "c",
  "e",
  " ",
];

let ans = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != " ") {
    ans += arr[i];
  } else {
    ans += " ";
  }
}
console.log(ans.trim().split(" ").reverse().join(" "));
