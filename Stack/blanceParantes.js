// const blanceParentheses = (str) => {
//   const Stack = [];
//   const obj = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
//       Stack.push(str[i]);
//     } else {
//       let pop = Stack.pop();
//       if(str[i] !== obj[pop]) {
//         console.log(false)
//         return
//       }
//     }
//   }
//   if(Stack.length == 0){
//     console.log(true)
//   }else{
//     console.log(false)
//   }
// };
// blanceParentheses("{{}}");
// blanceParentheses("((")
// blanceParentheses('(]')

const braket = (str) => {
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      arr.push(str[i]);
    } else {
      let pop = arr.pop();
      console.log(pop);
      if (str[i] != obj[pop]) {
        console.log(false);
        return;
      }
    }
  }
  arr.length == 0 ? console.log(true) : console.log(false);
};
braket("{{}}");
braket("{{{{}}}})(");
