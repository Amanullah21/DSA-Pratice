const freQuencyCount = (arr) => {
  const obj = {};
  for (const key of arr) {
    obj[key] = obj[key] + 1 || 1;
  }
  console.log(obj);
};
const arr = [3, 2, 4, 1, 5, 4, 4, 2, 1, 5, 6, 3, 6, 1];
freQuencyCount(arr);
