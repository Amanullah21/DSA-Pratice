const k = 1;
const arr = [3, 4, 5, 1, 2];

const largestRotateElement = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;
  let max = arr[0];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(arr[mid]);
    if (arr[mid] < arr[high]) {
      high = mid - 1;
      max = Math.max(max, arr[mid]);
    } else {
      low = mid + 1;

      max = Math.max(max, arr[mid]);
    }
  }
  console.log(max, "Max");
};

largestRotateElement(arr, k);
