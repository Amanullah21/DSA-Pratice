// Majority element
// Given an array A having N non-negative integers. Find the element that occurs more than N/2 times. If no such element is there then print -1.

// 2
// 6
// 1 1 1 1 2 3 => Yes elemnt is 1
// 5
// 1 1 2 2 3 => No there are no element in majority

const majorityElement = (n, arr) => {
  const obj = {};
  for (const key of arr) {
    obj[key] = obj[key] + 1 || 1;
  }
  console.log(obj);
  for (key in obj) {
    if (obj[key] > n / 2) {
      return console.log(key);
    }
  }
  return console.log("not majority element");
};
const arr = [1, 1, 3, 3];
majorityElement(arr.length, arr);
