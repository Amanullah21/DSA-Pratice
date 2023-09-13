// ## **Sliding Window Maximum**
// Given an array and an integer K, find the maximum for each and every contiguous subarray of size K.

// #### **Sample Input**
arr = [1, 2, 3, 1, 4, 5];
K = 3;
// #### **Sample Output**
// 	Output: 3 3 4 5
// #### **Sample Explanation**
//     Maximum of 1, 2, 3 is 3
//     Maximum of 2, 3, 1 is 3
//     Maximum of 3, 1, 4 is 4
//     Maximum of 1, 4, 5 is 5
// #### **Expected Time Complexity**
// __O__(N* log K), where N : Size of array, K: Size of sub-array
// #### **Expected Space Complexity**
// __O__(K) : Auxillary space,  where K is the size of sub-array

// #### **Constraints**
// 	1 <= N <= 100000
// 	1 <= K <= 100000

const slidingWindowMaximum = (arr, k) => {
  let ans = "";
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = i; j < arr.length; j++) {
      str += arr[j];
      if (str.length == k) {
        ans = str.split("").sort().join("");
        output += ans[ans.length - 1];
      }
    }
  }
  console.log(output);
};
slidingWindowMaximum(arr, K);
