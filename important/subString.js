const subString = (str) => {
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let subStr = "";
      for (let k = i; k <= j; k++) {
        subStr += str[k];
      }
      console.log(subStr);
    }
  }
};
subString("calci");
