const removeDublicate1 = (arr) => {
  console.log(arr);
  let count =0
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      arr[i + 1] = arr[i + 2];
      count++
      console.log(arr[i])
    }
  }
  console.log(count,'count');
  arr.pop();
  console.log(arr);
};
// const arr = [3, 4, 1, 5, 4];
// removeDublicate1(arr);
removeDublicate1([10, 9, 4, 2, 4, 7, 3]);

const removeDublicate2 =(arr) =>{
    let set  = new Set()
    for(let i=0;i<arr.length;i++){
        set.add(arr[i])
    }
    console.log(set);
    for(const key of set.values()){
        console.log(key)
    }
}
// removeDublicate2(arr)
