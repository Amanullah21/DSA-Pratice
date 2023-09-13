// ## **Frequency in Sorted Array**
// Given a sorted array of N integers, you will be given Q queries and in each query you will be given an integer and you need to output the frequency of that integer in the given array.
// __Note__: Avoid using extra space like using Hashing or Map, It is expected to implement all functions which you use like Binary Search etc.

// #### **Sample Input**
const N = 10;
let Q = 3;
const arr = [1, 3, 3, 4, 5, 6, 7, 7, 7, 7, 8, 9];
//     Query 1 : 3
Q = 7;
//     Query 3 : 11

// #### **Sample Output**
//     Output Query 1 : 2
//     Output Query 2 : 2
//     Output Query 3 : 0

// #### **Sample Explanation**
//     In Query 1 : Count of 3 is 2
//     In Query 2 : Count of 7 is 2
//     In Query 3 : Count of 11 is 0

// #### **Expected Time Complexity**
// __O__(log(N)) for each Query, N: Size of the input array
// #### **Expected Space Complexity**
// __O__(1), for each Query

// #### **Constraints**
//     1<= N <= 10^6
//     1<= Q <= 10^5
//     1<= arr[i] <= 10^9

const frequencyInSortedArray = (arr, q) => {
  console.log(arr, q);
  let low = 0;
  let high = arr.length - 1;
  index1 = 0;
  index2 = 0;

  const indexOfUpperBond = (arr, q) => {
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] < q) {
        low = mid + 1;
      } else if (arr[mid] > q) {
        high = mid - 1;
      } else {
        low = mid + 1;
        index1 = mid;
      }
    }
    return index1;
  };

  const indexOfLowerBond = (arr, q) => {
    let low = 0;
    // let count = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] < q) {
        low = mid + 1;
      } else if (arr[mid] > q) {
        high = mid - 1;
      } else {
        high = mid - 1;
        index2 = mid;
      }
    }
    return index2;
  };
  //   console.log(indexOfLowerBond(arr, q));
  let ans = indexOfUpperBond(arr, q) - indexOfLowerBond(arr, q);
  console.log(ans + 1);
};

frequencyInSortedArray(arr, Q);
