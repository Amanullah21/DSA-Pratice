let array = [2, 3, 4,4, 5, 6];
let key = 8;
// let array = [2, 3, 4, 5, 6];
const twoPointer = (array, key) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    if (array[low] + array[high] == key) {
      console.log(array[low], array[high]);
      low++;
      high--;
    } else if (array[low] + array[high] < key) {
      low++;
    } else {
      high--;
    }
  }
};

// twoPointer(array,key)

// let array = [2, 3, 4, 5, 6];
// let key = 8;
const twoPointer1 = (arr, key) => {
  console.log(arr,key);
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    if (arr[low] + arr[high] == key) {
      console.log(low, high);
      low++;
      high--;
    } else if (arr[low] + arr[high] < key) {
      low++;
    } else {
      high--;
    }
  }
};
twoPointer1(array, key);
