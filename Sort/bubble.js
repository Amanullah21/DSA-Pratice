// const bubble = (arr,n) => {
//   for(let i=0;i<n-1;i++){
//       for(let j=0;j<n-i-1;j++){
//           if(arr[j] >arr[j+1]){
//               [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//           }
//       }
//   }

//   console.log(arr)
// };

// bubble([3, 8, 2, 3, 5, 2],6);

const bubbleSort = (arr) => {
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr)
};
const arr = [4, 2, 2, 4, 2, 3, 4, 2, 4, 2, 4];
bubbleSort(arr);
