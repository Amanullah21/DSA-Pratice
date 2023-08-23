var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0,
    right = matrix.length * matrix[0].length - 1;
//   console.log(right);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let mid_val = matrix[Math.floor(mid / n)][mid % n];
    if (mid_val === target) return true;
    else if (mid_val < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

const matrix = [
  [1, 3, 5, 9],
  [31, 32, 43, 44],
  [45, 66, 77, 88],
  [99, 111, 222, 333],
];
console.log(searchMatrix(matrix, 3));
