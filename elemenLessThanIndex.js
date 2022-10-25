// find the elements tha value equal to index value
const valueEqualToIndex = (arr, n) => {
  // arr = arr.sort(function(a,b){return a-b})
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
      return [arr[i], i];
    }
  }
  return "no index equal to element";
};
let arr = [2, 2, 3, 12, 7];
console.log(valueEqualToIndex(arr, arr.length));
