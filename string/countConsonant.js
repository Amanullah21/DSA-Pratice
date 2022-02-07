// Count Consonant
// Description
// You are give a strings.
// Your task is to write a program that counts the number of consonants (non-vowels characters) present in the string.

// Input
// First-line contains a stringS
// Constraints:
// 1 <= length of (S) <= 100
// Output
// Output one number which is the count of number of consonants present in the string.
// Sample Input 1 
// masaischool
// Sample Output 1
// 6

// Hint
// For stringmasaischool, vowels are (highlighted in bold)
// masaischool


function countConsonants(s) {
    vowel = "aeiou"
  let count =0
  let consu =s.length
    for(i=0;i<s.length;i++){
      for(j=0;j<vowel.length;j++){
        if(s[i] == vowel[j]){
          //console.log(s[i])
          count++
          }
      }
    }
  console.log(consu-count)
  }

  countConsonants('amanullah')