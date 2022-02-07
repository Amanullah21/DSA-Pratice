let matrix = [[1,2,3],[4,5,6],[7,8,9]]

let n=matrix.length


for(let i=0;i<n;i++){
    let ans = ""
    for(let j=n-1;j>=0;j--){
        ans += matrix[i][j] +" "
    }
    console.log(ans)
}