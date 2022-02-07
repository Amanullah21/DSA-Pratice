// reverse the sentance


// 1st way
function masaiSentenceReverse(s) {
    s= s.split(" ")
    let rev=""
    for(let i=s.length-1;i>=0;i--){
        rev+= s[i] +" "
    }
    console.log(rev)
}

masaiSentenceReverse("i am student of masai school")


//2nd way 

function masaiSentenceReverse2(s) {
    let  words = s.split(' ');
      //console.log(words)
    let output=""
    let arr=[]
    for(i=words.length-1;i>=0;i--){
     arr.push(words[i])
      }
  console.log(arr.join(" "))
}
masaiSentenceReverse2("i am studnet of masai school")