const quickSort = (arr, first, last) => {
  if (first < last) {
    const pivot = partition(arr, first, last);
    quickSort(arr, first, pivot - 1);
    quickSort(arr, pivot + 1, last);
  }
};

const partition = (arr, first, last) => {
  let pivot = arr[first]; //2
  let i = first; //0
  for (let j = first; j <= last; j++) {
    if (arr[j] <= pivot) {
      //1
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i - 1, first);
  return i - 1;
};

//swap
const swap = (arr, left, right) => {
  [arr[left], arr[right]] = [arr[right], arr[left]];
};
//calling quick sort function
const arr = [3, 1, 5, 3];
quickSort(arr, 0, arr.length - 1);
console.log(arr.join(" "));
