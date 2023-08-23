const arr = [4, 5, 1, 2];
const reverseArray = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
  console.log(arr);
};
reverseArray(arr);
