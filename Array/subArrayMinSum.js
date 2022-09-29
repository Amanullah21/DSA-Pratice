// //-15 Ans { -6,-4,+2,-7}
let arr = [3, 2, 1, -6, -4, 2, -7];
let min = 9999999999;
let sum = 0;
let n = arr.length;

// time C =On*3
const subArr1 = (arr, n, min, sum) => {
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
subArr1(arr, n, min, sum);

//time On*2
const subArr2 = (arr, n, min, sum) => {
  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
    }
    min = Math.min(min, sum);
  }
  console.log(min);
};
subArr2(arr, n, min, sum);

//time On

const subArr3 = (arr, n, min, sum) => {
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum < min) {
      min = sum;
    }
  }
  console.log(min);
};
subArr3(arr, n, min, sum);
