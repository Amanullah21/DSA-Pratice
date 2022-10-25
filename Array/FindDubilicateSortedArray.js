//given two sorted array then find the common value

arr1 = [1, 2, 3, 5, 6, 7];
arr2 = [3, 6, 7, 8, 20];
output = [3, 6, 7];
function findDuplicates(arr1, arr2) {
  let low = 0;
  let high = arr1.length - 1;
  let left = 0;
  let right = arr2.length - 1;
  let ans = "";

  while (low <= high && left <= right) {
    if (arr1[low] == arr2[left]) {
      ans += arr1[low] + " ";
      left++;
      low++;
    } else if (arr1[low] > arr2[left]) {
      left++;
    } else {
      low++;
    }
  }
  console.log(ans);
}

findDuplicates(arr1, arr2);
