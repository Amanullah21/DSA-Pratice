const findDublicate1 = (arr) => {
  console.log(arr);
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      console.log(arr[i]);
      return;
    }
  }
};
const arr = [1, 3, 5, 2, 3];
// findDublicate1(arr);
// findDublicate1([3, 2, 1, 4, 2]);

const findDublicate2 = (arr) => {
  console.log(arr);
  const obj = {};
  for (const key of arr) {
    obj[key] = obj[key] + 1 || 1;
  }
  console.log(obj);
  for (const key in obj) {
    if (obj[key] >= 2) {
      console.log(key);
    }
  }
};
findDublicate2(arr);
