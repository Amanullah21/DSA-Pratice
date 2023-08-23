// Sort an array of 0s, 1s and 2s
let arr = [0, 2, 1, 2, 0];

const sort012 = (arr) => {
  let zero = 0;
  let one = 0;
  let two = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zero++;
    } else if (arr[i] == 1) {
      one++;
    } else if (arr[i] == 2) {
      two++;
    }
  }
  console.log(zero, one, two);
  for (let i = 0; i < arr.length; i++) {
    if (i < zero) {
      arr[i] = 0;
    } else if (i < one + zero) {
      arr[i] = 1;
    } else if (i < zero + one + two) {
      arr[i] = 2;
    }
    // console.log(arr[i]);
  }
  return arr;
};

console.log(sort012(arr));

console.log(arr);
