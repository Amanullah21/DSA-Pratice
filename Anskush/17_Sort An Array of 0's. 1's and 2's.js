// ## **Sort an Array of 0s, 1s, or 2s**
// Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.
// #### **Sample Input**
array = [0, 1, 2, 0, 1, 2];
// sort method => NlogN;
//
// #### **Sample Output**
// 	array = {0, 0, 1, 1, 2, 2}

// #### **Sample Explanation**
// 	The array on sorting gives the resultant array as shown in the output

// #### **Expected Time Complexity**
// __O__(N), where N is the size of the array.
// #### **Expected Space Complexity**
// __O__(1),Auxilliary Space

// #### **Constraints**
// 	 n == nums.length
// 	 1 <= n <= 300
// 	 array[i] is 0, 1, or 2.

const sort123 = (arr) => {
  console.log(arr);
  let zero = 0;
  let one = 0;
  let two = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zero++;
    } else if (arr[i] == 1) {
      one++;
    } else {
      two++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i < zero) {
      arr[i] = 0;
    } else if (i < zero + one) {
      arr[i] = 1;
    } else {
      arr[i] = 2;
    }
  }
  console.log(arr);
};
sort123(array);
