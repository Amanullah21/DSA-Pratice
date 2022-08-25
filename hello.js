// // console.log("h");

// const x = "Amanullah";
// let set = new Set(x);
// // console.log(set);
// for (let key of x) {
//   console.log(key);
// }


const arr = [1,2,3,4,5]
// 10 14
let min = 0
let max =0
for(let i=0;i<arr.length-1;i++){
  min += arr[i]
  max += arr[i+1]
}
console.log(`min sum is ${min} and Max sum is ${max}`)