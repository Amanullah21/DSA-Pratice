const arr = [1, 2, 2];
let ans = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == arr[i + 1]) {
   arr[i] = arr[i+1]
  }
}
console.log(arr);
