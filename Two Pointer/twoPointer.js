
let array = [2,3,4,5,6]
let key = 8


const twoPointer =( array , key ) =>{
    let low = 0
    let high =array.length-1

    while( low <= high){
        if(array[low] + array[high] == key){
            console.log(array[low],array[high])
            low++
            high--
        }else if(array[low] + array[high] < key){
            low ++
        }else{
            high --
        }
    }
}


twoPointer(array,key)