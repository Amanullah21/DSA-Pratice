// console.log("method 1")
// const twoSum = function(nums, target) {
//     console.log(nums,target)
//     for(let i=0;i<nums.length-1;i++){
//       for(let j=i+1;j<nums.length;j++){
//           if(nums[i] + nums[j] ==target){
//               return [i,j].join(" ")
//           }
//       }
//   }
// };
// console.log(twoSum([3,1,4],5))

// console.log("Method 2")
// const twoSum2 = (nums, target) => {
//     console.log(nums,target)
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     if (nums[left] + nums[right] == target) {
//       console.log(left, right);
//       return;
//     } else if (nums[left] + nums[right] < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   console.log("not two sum")
// };
// const nums = [2, 7, 11, 15],
//   target = 9;
// twoSum2(nums, target);
// let arr = [2,3, 4];
// twoSum2(arr, 6);

// console.log("Method 3")
// const twoSum3 = (nums, target) => {
//     console.log(nums,target)
//     for (let i = 0; i <nums.length; i++) {
//         let hold = target - nums[i]
//         if (nums.includes(hold) && i != nums.indexOf(hold)) {
//             return [i, nums.indexOf(hold)]
//         }
//     }
// }
// console.log(twoSum3([3,2,4],6))

const twoSumSortArr = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    if (arr[low] + arr[high] == target) {
      console.log(true);
      console.log(arr[low], arr[high]);
      return;
    } else if (arr[low] + arr[high] < target) {
      low++;
    } else {
      high--;
    }
  }
};
const arr = [2, 7, 11, 15];
twoSumSortArr(arr, 9);
