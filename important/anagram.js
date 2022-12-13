// // Anagram Detector
// // Description
// // An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// // For example, the wordanagramcan be rearranged intonag a ram.
// // Given 2 strings (S1andS2), write a program that detects if both are anagrams of each other.
// // If they are anagrams, printTrue
// // Else printFalse

// // Input
// // Input Format :
// // First line of input contains first string
// // Second line of input contains second string
// // Constraints :
// // 1 <= Length of each string < 1000

// // Output
// // Output a string based on conditions mentioned above.

// // Sample Input 1
// // anagram
// // nag a ram
// // Sample Output 1
// // True

// // Hint
// // anagramandnag a ram, Both strings are anagram of each other, hence we printTrue.

// function anagramDetector(S1,S2){

//     let S11 =[]
//   let S22=[]
//     for(i=0;i<S1.length;i++){
//       if(S1[i] !== " ")
//       //  console.log(S1[i])
//           S11.push(S1[i])
//       }
//     for(i=0;i<S2.length;i++){
//       if(S2[i] !== " ")
//             S22.push(S2[i])
//       }

//         let sort1 =S11.sort()
//         let sort2 =S22.sort()
//         let out1=""
//       let out2=""

//         for(i=0;i<S11.length;i++){
//           out1+=S11[i]
//           out2+=S22[i]
//         }

//             if(out1 ==out2)
//             console.log("True")
//           else
//             console.log("False")
// }

// anagramDetector("aman ullah","amanullah")

const anagram = (str1, str2) => {
  // console.log(str1, str2);
  let ans1 = [],
    ans2 = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != " ") {
      ans1.push(str1[i]);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] != " ") {
      ans2.push(str2[i]);
    }
  }

  ans1 = ans1.sort();
  ans2 = ans2.sort();
  let out1 = "";
  let out2 = "";
  for (let i = 0; i < ans1.length; i++) {
    out1 += ans1[i];
    out2 += ans2[i];
  }
  console.log(out1, out2);
  return out1 == out2;
};
console.log(anagram(" a c l c i", "cal  ci "));
