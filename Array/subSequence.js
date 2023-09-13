// function generateAllSubsequence(str, n, index = -1, current = "") {
//   if (index == n) return;

//   if (current.length > 0) {
//     console.log(current);
//   }

//   for (let i = index + 1; i < n; i++) {
//     current += str[i];
//     generateAllSubsequence(str, n, i, current);

//     current = current.slice(0, -1);
//   }
//   return;
// }
// let str = "abcd";
// generateAllSubsequence(str, str.length);

// let index = 0;
// let newString = "";

// const generateAllSubsequence1 = (str, index, newString) => {
//   if (newString.length != 0) console.log(newString);
//   if (str.length == index) return;

//   for (let i = index; i < str.length; i++) {
//     newString += str[i];
//     generateAllSubsequence1(str, i + 1, newString);
//     newString = newString.substring(0, newString.length - 1);
//   }
// };

// generateAllSubsequence1(str, index, newString);

// const generateAllSubsequence = (str, index = 0, newString = "") => {
//   if (newString.length != 0) {
//     console.log(newString);
//   }
//   if (index == str.length) return;

//   for (let i = index; i < str.length; i++) {
//     newString += str[i];
//     generateAllSubsequence(str, i + 1, newString);

//     newString = newString.substring(0, newString.length - 1);
//   }
//   return;
// };
let str = "abcd";
// generateAllSubsequence(str);

const subString = (str, index = 0, newString = "") => {
    if (newString.length != 0) console.log(newString);
    if (str.length == 0) return;
  
    for (let i = index; i < str.length; i++) {
      newString += str[i];
      subString(str, i + 1, newString);
      newString = newString.substring(0, newString.length - 1);
    }
    return;
  };
  subString(str);
