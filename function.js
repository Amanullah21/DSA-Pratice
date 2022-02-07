// => type of function

//without argument
// function add(){
//     var a =5
//     var b =4
//     // var sum =a+b
//     // console.log(a+b)
//     return a+b
// }
// console.log(add())


// with argument
// function sub(a,b){
//     return a-b
// }
// console.log(sub(5,2))
// console.log(sub(3,2))
// console.log(sub(1,5))
// console.log(sub(6,5))
// console.log(sub(9,2))


// console.log("----------------------")
// function multi(a,b){
//     return  a*b
// }

// console.log(multi(4,5))


// console.log("---------------------")


// 1at way
function add (a,b){
    return a+b
}
console.log(add(7,2))



// 2nd way
var add2 = function(a,b){
    return a+b
}
console.log(add2(7,2))




// 3rd way
var add3 = (a,b) =>{
    return a+b
}
console.log(add3(5,2))


// 4th way   =>single line
var sub = (a,b) => a-b;
console.log(sub(4,1))


// 5th way //single argument
let mul = a =>  a+5
console.log(mul(5))






