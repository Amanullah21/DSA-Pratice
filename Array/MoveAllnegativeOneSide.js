// Move all negative numbers to beginning and positive to end with constant extra space

const arr = [-12, 11, -13, -5, 6];


// 1st Way 
console.log(arr.sort((a, b) => a - b));

//2nd Way
const moveAll = (arr) => {
  console.log(arr);
  let low = 0;
  let high = 0;
  while (low <= arr.length) {
    if (arr[low] < 0) {
      [arr[low], arr[high]] = [arr[high], arr[low]];
      high++;
    }
    low++;
  }
  return arr;
};
// console.log(moveAll(arr));

// 3rd Way
const moveAll1 = (arr) => {
  console.log(arr);
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    if (arr[left] < 0 && arr[right] < 0) left += 1;
    else if (arr[left] > 0 && arr[right] < 0) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left += 1;
      right -= 1;
    } else if (arr[left] > 0 && arr[right] > 0) right -= 1;
    else {
      left += 1;
      right -= 1;
    }
  }

  console.log(arr);
};
// moveAll1(arr);
