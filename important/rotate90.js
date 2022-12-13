const rotate90 = (arr) => {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let ans = "";
    for (let j = 0; j < arr.length; j++) {
      ans += arr[i][j] + " ";
    }
    console.log(ans);
  }
};

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
rotate90(arr);
