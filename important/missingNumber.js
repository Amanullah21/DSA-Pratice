const missingNumber = (arr) => {
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      console.log(arr[i] + 1);
    }
  }
};
arr = [4, 5, 1, 3];
arr = arr.sort((a, b) => a - b);
missingNumber(arr);
