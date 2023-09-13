// ## **Rotate square matrix by 90 degrees**
// Given a square matrix of size N*N. Print the matrix after rotating it by 90 degrees in anti-clockwise direction.

// #### **Sample Input**
// 	input: N = 3
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// #### **Sample Output**
// 	Output:
//    3 6 9
// 		2 5 8
// 		1 4 7

// #### **Sample Explanation**
// Self explanatory.

// #### **Expected Time Complexity**
// __O__(N*N)

// #### **Expected Space Complexity**
// __O__(1), i.e., constant space complexity.

// #### **Constraints**
// 	1 <= N <= 1000

const matrixRotate = (matrix) => {
  for (let i = matrix.length - 1; i >= 0; i--) {
    let ans = "";
    for (let j = 0; j < matrix[0].length; j++) {
      ans += matrix[j][i] + " ";
    }
    console.log(ans);
  }
};
matrixRotate(matrix);
