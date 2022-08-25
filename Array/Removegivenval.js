var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) { //0 ->1 -> 2 -> 3 ->4 ->5 ->6 ->7
    if (nums[i] !== val) { //flase0 ->1 =>2 -> false3 false4 =>5 ->6
      nums[k] = nums[i]; //nums[k] = 2  =>2 => 
      k++; 
    }
  }
  return nums;
};
const arr = [3, 2, 2, 3,3,4,2];
console.log(removeElement(arr, 3));
