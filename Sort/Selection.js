function solve(arr){
    for(let i=0;i<arr.length-1;i++){
        let min =i
        for(j=min ;j<arr.length;j++){
            if(arr[min] >arr[j])
            min=j
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    console.log(arr.join(" "))
}
solve([3,2,1,4,6])