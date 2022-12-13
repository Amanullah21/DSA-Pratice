// const factorial=(n) =>{
//     let mul =1
//     for(let i=1;i<=n;i++){
//         mul *=i
//     }
//     console.log(mul)
// }
// factorial(4)

const fact = (n) => {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans
};
console.log(fact(3));
console.log(fact(4));