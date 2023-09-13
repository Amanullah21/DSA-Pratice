const balancedParenthesis = (str) => {
  let stack = [];
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
    } else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
      let pop = stack.pop();
      if (str[i] != obj[pop]) {
        console.log(false);
        return;
      }
    }
  }
  stack.length == 0 ? console.log(true) : console.log(false);
};
balancedParenthesis("{{{}}{}{");
balancedParenthesis("{}{}{}{}");
balancedParenthesis("{{}}#{}{#}{}RT{}{ERRER}RRERT(EEEWRWE)WDXXX()({})");
