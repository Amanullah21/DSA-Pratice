const validPalindrome2 = (num) => {
  let first = 0;
  let str = num + "";
  let last = str.length - 1;

  while (first <= last) {
    if (str[first] == str[last]) {
      first++;
      last--;
    } else {
      console.log(false);
      return;
    }
  }
  console.log(true);
};
validPalindrome2(111);
