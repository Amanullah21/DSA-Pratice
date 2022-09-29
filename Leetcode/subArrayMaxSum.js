// continuos minimum value
const arr = [3, 4, 2, -3, -1]; // -6
// const arr = [-123,-434] // -557
// const arr = [
//   77, -52, -9, -98, -46, 58, -46, 71, 91, 100, 26, -95, -62, 38, -90, -6,
// ];
//-215
let max = 0;
let n = arr.length;

//  time  n*3
// 1st approch
const subArrayMaxSum = (arr, max, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      max = Math.max(max, sum);
    }
  }
  console.log(max);
};
subArrayMaxSum(arr, max, n);

// 2nd Aproch
// time n*2

const subArrayMaxSum2 = (arr, max, n) => {
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
    }
    max = Math.max(max, sum);
  }
  console.log(max);
};
subArrayMaxSum2(arr, max, n);

//3rd Approch time n
const subArrayMaxSum3 = (arr, max, n) => {
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum < max) {
      max = sum;
    }
    if (sum > 0) {
      sum = 0;
    }
  }
  console.log(max);
};
subArrayMaxSum3(arr, max, n);
