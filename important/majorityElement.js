const mejorityElement = (arr) => {
  console.log(arr);
  let n = arr.length-1;
  let str = "";
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) {
        count++;
        str = arr[i];
      }
    }
    if (count > n / 2) {
      console.log(str);
      return;
    }
  }
  console.log(-1);
};

const arr = [3, 3, 2, 3,2, 24, 3];
mejorityElement(arr);
