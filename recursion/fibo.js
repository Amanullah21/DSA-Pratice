const fibo =(n) =>{
 if(n ==0 || n==1){
     return n
 }
 return fibo(n-2) + fibo(n-1)
}

console.log(fibo(7))

// 0 1 1 2 3 5 8 13.... 

// fibo(n) = fibo(n-1) + fibo(n-2) 

// const fibonaci =(n) =>{
    
// }