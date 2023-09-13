// ## **Binary Search**
// Given a sorted array of N integers and you need to find if Key (K) exists in the array or not, write an efficient code to do this.

// __Note__: Try to do it by implementing Binary Search both iteratively and recursively

// #### **Sample Input**
const arr = [1, 3, 4, 7];
const K = 1;

// #### **Sample Output**
//     true

// #### **Sample Explanation**
//     Using Binary Search we find that key 3 exists in the array.

// #### **Expected Time Complexity**
// __O__(logN), where N is the length of the array
// #### **Expected Space Complexity**
// __O__(1), constant space solution

// #### **Constraints**
//     1<= N <= 10^6
//     1<= arr[i] <= 10^6

const binarySearchIT = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == k) {
      console.log(true);
      return;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(false);
};
binarySearchIT(arr, K);

const binarySearchRecursion = (arr, key, low, high) => {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] < key) {
    return binarySearchRecursion(arr, key, mid + 1, high);
  } else if (arr[mid] > key) {
    return binarySearchRecursion(arr, key, low, mid - 1);
  } else {
    return 1;
  }
};

console.log(binarySearchRecursion(arr, K, 0, arr.length - 1));
