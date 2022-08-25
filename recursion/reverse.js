function reverse(str, len) {
  if (len == str.length) {
    return;
  }
  reverse(str, len + 1);
  console.log(str[len]);
}

let a = "aman";

console.log(reverse(a, 0));
