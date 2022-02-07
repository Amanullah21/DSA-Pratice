//find the median element from given array

const find_median =(arr) =>{
    let mid =0
    arr = arr.sort(function(a,b){
        return a-b
    })  
    mid = Math.floor(arr.length/2)
    if(arr.length %2 == 1){
        return arr[mid]
    }else{
        console.log(arr[mid]+" " +arr[mid-1])
        return (arr[mid]+arr[mid-1])/2
    }
}
let arr =[18,2,10,13,8,8]

console.log(find_median(arr))