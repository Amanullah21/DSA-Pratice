// reove dubclicate array

const arr = [1, 2, 2, 3, 5, 5];
let ans = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == arr[i + 1]) {
    arr[i] = arr[i + 1];
  }
}
console.log(arr);

const removeDublciate = (arr) => {
  arr = arr.sort((a, b) => a - b);
  
};

removeDublciate(arr);
