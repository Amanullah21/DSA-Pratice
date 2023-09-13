const arr = [1, 2, 3, 3, 4];
console.log(arr);

let max = 0;
let ans = 0;
for (i = 0; i < arr.length; i++) {
  count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
    }
  }
  if (count > max) {
    max = count;
    ans = arr[i];
  }
}

console.log(ans);

const obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] + 1 || 1;
}
console.log(obj);
