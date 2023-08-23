// Maximum and minimum of an array using minimum number of comparisons
const arr = [3, 5, 4, 1, 9];
const maxAndMin = (arr) => {
  let max = (min = arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
};
console.log(maxAndMin(arr));
