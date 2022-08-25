// Number of Occurences in logn
// You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.
// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION
// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION
// USING BRUTE FORCE/LINEAR SEARCH IN THIS CASE WOULD LEAD TO DISQUALIFICATION
// Input
// First line contains N and K
// Second line contains N space separated sorted integers
// Constraints :
// N<100
// Output
// Print number of times that number is present in the given list
// Sample Input 1
// 6 3
// 2 3 3 3 6 9
const arr = [3, 4,5, 5,5, 6, 19];
const findKey = (n, arr, key) => {
  let low = 0;
  let high = n - 1;
  let store =0
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == key) {
        store = mid
        low = mid+1
    } else if (arr[mid] < key) {
        low= mid+1
    }else{
        high= mid-1
    }
  }
  console.log(store)
};
findKey(arr.length, arr, 5);
