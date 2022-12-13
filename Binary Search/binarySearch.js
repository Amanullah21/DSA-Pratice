let arr = [1, 2, 3, 4, 6, 7, 20, 22, 25, 99, 111];
const target = 22;
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      console.log(mid + 1, arr[mid],'j');
      return;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};
binarySearch(arr, target);

const binarySearch1 = (arr, key) => {
  console.log(arr, key);
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(mid);
    if (arr[mid] == key) {
      console.log(true);
      return;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};

// let arr = [3, 21, 1, 2, 4, 5, 6];
arr = arr.sort((a, b) => a - b);
binarySearch1(arr, 3);
