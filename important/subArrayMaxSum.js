// // continuos max value
// const arr = [3, 4, 2, -3, -1]; // 9
// // const arr = [-123,-434] // -557
// // const arr = [
// //   77, -52, -9, -98, -46, 58, -46, 71, 91, 100, 26, -95, -62, 38, -90, -6, ];
// let max = 0;
// let min = 9999999999;
// let n = arr.length;

// //  time  n*3
// // 1st approch
// const subArrayMaxSum = (arr, max, n) => {
//   let min = 99999;
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       sum = 0;
//       for (let k = i; k <= j; k++) {
//         sum += arr[k];
//       }
//       max = Math.max(max, sum);
//       min = Math.min(min, sum);
//     }
//   }

//   console.log(`Max : ${max} 1st Approch with time On*3`);
//   console.log(`Min : ${min} 1st Approch with time On*3`);
// };
// subArrayMaxSum(arr, max, n);

// // 2nd Aproch
// // time n*2
// const subArrayMaxSum2 = (arr, max, n) => {
//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += arr[j];
// max = Math.max(max, sum);
//     }
//     min = Math.min(min, sum);
//     max = Math.max(max, sum);
//   }
//   console.log(`Max : ${max} 2nd Approch with time On*2`);
//   console.log(`Min : ${min} 2nd Approch with time on*2`);
// };
// subArrayMaxSum2(arr, max, n);

// //3rd Approch time n
// const subArrayMaxSum3 = (arr, max, n) => {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += arr[i];
//     if (sum < max) {
//       max = sum;
//     } else {
//       min = sum;
//     }
//     if (sum > 0) {
//       sum = 0;
//     }
//   }
//   console.log(`Max : ${max} 3rd Approch with time On`);
//   console.log(`Min : ${min} 3rd Approch with time On`);
// };
// subArrayMaxSum3(arr, max, n);

// const maxSum1 = (arr) => {
//   console.log(arr);
//   let max = 0;
//   const n = arr.length - 1;
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       let sum = 0;
//       for (let k = i; k < j; k++) {
//         sum += arr[k];
//       }
//       max = Math.max(max, sum);
//     }
//   }
//   console.log(max);
// };
const arr = [-123, -434]; // -557
// maxSum1(arr);

const maxSum2 = (arr) => {
  console.log(arr);
  const n = arr.length;
  let max = -9999999999999;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      max = Math.max(max, sum);
      console.log(max);
    }
  }
  console.log(`Max : ${max} 2nd Approch with time On*2`);
};
maxSum2(arr);
