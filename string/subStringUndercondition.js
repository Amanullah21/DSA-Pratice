// Substring under condition
// Description
// You are given a strings, you have to find the count of all such substrings which start and ends with the same character.
// Input
// First and the only line contains a strings
// Constraints:
// 1 <= Length of s <= 1000
// Output
// Print the count of total number of such substrings starting and ending with same characters.
// Sample Input 1 
// abcab
// Sample Output 1
// 7

// Hint
// Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.
// So total count is 7. Hence we print 7.



function subStrUnderCond(s){

    let count=0;
    for(i=0;i<s.length;i++){
        for(j=i;j<s.length;j++){
            if(s[i] == s[j]){
                count++
            }
        }
    }
    console.log(count)
}

subStrUnderCond('amanullah')