// ## **Two Numbers in sorted array whose sum is K**

// Given a sorted array of integers nums and an integer K, return indices of the two numbers such that they add up to K.

// Note: You can assume that the answer always exists

// #### **Sample Input**
const array = [2, 7, 11, 15];
const K = 9;
// #### **Sample Output**
// 	[0,1]
// #### **Sample Explanation**
// As seen from the sample input, the values at index 0 and 1 add up to the required value of 9. Therefore, the output is [0,1].

// #### **Expected Time Complexity**
// __O__(N),where N is the size of the array.

// #### **Expected Space Complexity**
// __O__(1), Auxillary space complexity.

// #### **Constraints**
// 	 2 <= nums.length <= 103
// 	-10^9 <= nums[i] <= 10^9
// 	-10^9 <= target <= 10^9

const sortedArrayWhoseSumisK = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    if (arr[low] + arr[high] == k) {
      console.log(low, high);
      return;
    } else if (arr[low] + arr[high] < k) {
      low++;
    } else {
      high--;
    }
  }
  console.log(-1);
};
sortedArrayWhoseSumisK(array, K);
