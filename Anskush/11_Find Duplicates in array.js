// Given an array A of N elements that contains elements from 1 to N-1. All elements occur once except one which occurs twice. Find the repeating element.
const n = 5;
const arr = [1, 3, 3, 2, 4];
// Output: 3;

// first method
const occur1 = (n, arr) => {
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
      if (count == 2) {
        console.log(arr[i]);
        return;
      }
    }
  }
  console.log(false);
};
// TC = On*n
// occur1(n, arr);

// 2nd method
const occur2 = (n, arr) => {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      console.log(arr[i]);
      return;
    }
  }
  console.log(false);
};
// occur2(n, arr);
// TC - O(NlogN)

// 3rd Method

const occur3 = (n, arr) => {
  let obj = {};
  for (let i = 0; i < n; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  console.log(obj);
  for (const key in obj) {
    if (obj[key] == 2) {
      console.log(key);
    }
  }
};
occur3(n, arr);

const occur4 = (n, arr) => {};
occur4(n, arr);
