//given two sorted array then find the common value

arr1 = [1, 2, 3, 5, 6, 7];
// arr2 = [3, 6, 7, 8, 20];
// output = [3, 6, 7];
// function findDuplicatesD(arr1, arr2) {
//   let low = 0;
//   let high = arr1.length - 1;
//   let left = 0;
//   let right = arr2.length - 1;
//   let ans = "";

//   while (low <= high && left <= right) {
//     if (arr1[low] == arr2[left]) {
//       ans += arr1[low] + " ";
//       left++;
//       low++;
//     } else if (arr1[low] > arr2[left]) {
//       left++;
//     } else {
//       low++;
//     }
//   }
//   console.log(ans);
// }

// findDuplicatesD(arr1, arr2);
const arr = [2, 4, 1, 5, 3, 2, 7, 8, 9];
const findDublicate1 = (arr) => {
  // let ans =''
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      console.log(arr[i], i);
    }
  }
};
// findDublicate1(arr)

const findDublicate2 = (arr) => {
  let obj = {};
  for (key of arr) {
    obj[key] = obj[key] + 1 || 1;
  }
  console.log(obj)
  for (key in obj) {
    
    if (obj[key] >= 2) {
      console.log(key);
    }
  }
};
// findDublicate2(arr);
const findDublicate3 =(arr) =>{
  console.log(arr)
  let arr1 =[]
  let set = new Set()
  for(let i=0;i<arr.length;i++){
    set.add(arr[[i]])
  }
  console.log(set)
  for(key of set.values()){
    arr1.push(key)
  }
  for(let i=0;i<arr.length-1;i++){
    if(arr[i] !== arr1[i]){
      console.log(arr[i])
    }
  }
}
findDublicate3(arr)
