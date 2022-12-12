const arr = [1, 2, 4, 8];

const binarySearch = (arr, key) => {
  // console.log(arr,key)
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // console.log(mid)
    if (arr[mid] == key) {
      return [true, mid];
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "no match";
};
// console.log(binarySearch(arr, 1));

const binarySearch1 = (arr, key) => {
  console.log(arr);
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == key) {
      console.log(`arr element is ${arr[mid]},arr index is ${ mid}`);
      return;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log("not match");
};

binarySearch1(arr, 11);
