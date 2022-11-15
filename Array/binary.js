const arr = [1,2,4,8]

const binarySearch =(arr,key) =>{
    // console.log(arr,key)
    let low =0
    let high =arr.length-1
    while(low<= high){
        let mid = Math.floor((low+high)/2)
        // console.log(mid)
        if(arr[mid] == key){
            return [true,mid]
        }
        else if ( arr[mid] <key){
            low = mid +1
        }else{
            high = mid-1
        }
    }
    return 'no match'
}
console.log(binarySearch(arr,1))