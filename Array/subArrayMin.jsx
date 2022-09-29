// continuos minimum value
// const arr = [3,-4, 2,-3,-1, 7,-5] // -6
// const arr = [-123,-434] // -557
const arr = [
  77, -52, -9, -98, -46, 58, -46, 71, 91, 100, 26, -95, -62, 38, -90, -6,
];
//-215
let min = 999999999;
let n = arr.length;

//  time  n*3
// 1st approch
const subArrayMin = (arr, min, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      min = Math.min(min, sum);
    }
  }
  console.log(min);
};
subArrayMin(arr, min, n);

// 2nd Aproch
// time n*2

const subArrayMin2 = (arr, min, n) => {
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
    }
    min = Math.min(min, sum);
  }
  console.log(min);
};
subArrayMin2(arr, min, n);

//3rd Approch time n
const subArrayMin3 = (arr, min, n) => {
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum < min) {
      min = sum;
    }
    if (sum > 0) {
      sum = 0;
    }
  }
  console.log(min);
};
subArrayMin3(arr, min, n);
