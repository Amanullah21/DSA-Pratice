let str = "(()";
let stack = [];
let obj = {
  "(": ")",
};
for (let i = 0; i < str.length; i++) {
  if ((str[i] = "(")) {
    stack.push(str[i]);
  } else {
    let value = stack.pop();
    if (str[i] !== obj[value]) {
      break;
    }
  }
}
console.log(stack.length);
