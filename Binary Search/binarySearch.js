const arr = [1, 2, 3, 4, 6, 7, 20, 22, 25, 99, 111];
const target = 22;
binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      console.log(mid + 1, arr[mid]);
      return;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};
binarySearch(arr, target);
