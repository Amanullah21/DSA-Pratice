const arr = [1, 2, 3, 4, 2, 5, 6, 7, 8];
const dublicate = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? (obj[arr[i]] = obj[arr[i]] + 1) : (obj[arr[i]] = 1);
  }

  console.log(obj);
  for (const key in obj) {
    if (obj[key] == 2) {
      console.log(key);
    }
  }
};
dublicate(arr);
