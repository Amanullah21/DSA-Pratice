// Masai Palindromic Substring
// Description
// You are provided a stringS.
// Write a program that returns length of the longest palindromic substring of that string.

// Input
// First line contains S, a string.
// Constraints
// 1 <= Length of string <= 100

// Output
// Output one number which is length of the longest substring which is a palindrome
// Sample Input 1 
// thisracecarisgood
// Sample Output 1
// 7

// Hint
// Sample 1 Explanation
// The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.
// Hence the output is 7



function masaiPalSubString(S){
    let count=0
    for(var i=0 ; i<S.length ; i++){
        for(var j=i+1 ; j<=S.length ; j++){
            var substr = ""
            for(var k=i ; k<j ; k++){
                substr+= S[k]
                rev =substr.split("").reverse().join("")
                if( rev == substr){
                    if( count <rev.length){
                        count=rev.length;
                    }
                }              
            }    
        }
    }
    console.log(count)
}
masaiPalSubString('thisracecarisgood')
