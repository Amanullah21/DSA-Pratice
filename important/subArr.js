const subArr = (arr, n) => {
  console.log(arr);
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let subArr = [];
      for (let k = i; k <= j; k++) {
        subArr.push(arr[k]);
      }
      console.log(subArr);
    }
  }
};
let arr = [3, 3, 2, 4, 2];
subArr(arr, arr.length);
