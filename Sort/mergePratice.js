const mergeSort = (arr) => {
  //   console.log(arr);
  if (arr.length == 1) return arr;
  let mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid, arr.length);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  let i = 0,
    j = 0,
    result = [];
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
  }
  return result;
};
console.log(mergeSort([3, 4, 5, 2, 3]));
