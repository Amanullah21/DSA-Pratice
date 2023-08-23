const arr = [1, 1, 1, 2, 3, 4, 5, 5];
const k = 5;

const lowerBond = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;
  let ans = 0;
  count = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == k) {
      ans = mid;
      high = mid - 1;
      count++;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(ans, count);
};
lowerBond(arr, k);
