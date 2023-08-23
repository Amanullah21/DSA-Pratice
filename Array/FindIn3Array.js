Input: n1 = 6;
arr1 = [1, 5, 10, 20, 40, 80];
n2 = 5;
arr2 = [9, 7, 20, 80, 100];
n3 = 8;
arr3 = [1, 4, 15, 20, 30, 70, 80, 120];
// Output: 20 80
// Explanation: 20 and 80 are the only
// common elements in A, B and C.2`

let i = 0;
let j = 0;
let k = 0;
let ans = "";
while (i < n1 && j < n2 && k < n3) {
  if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
    ans += arr1[i] + " ";
    i++;
    j++;
    k++;
  } else if (arr1[i] < arr2[j]) i++;
  else if (arr2[j] < arr3[k]) j++;
  else k++;
}
console.log(ans);
