
str = "aba"

function isPalindrome (str) {
    str = str.replace(/[^a-z0-9]/i, '').toLowerCase();
    return (str.length > 0) && Array.from(str).reverse().join('') === str;
  }

 console.log( isPalindrome(str))