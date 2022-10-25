// Given integer number  to find make Roman number
//  7 -> VII

let ans = "";
const roman = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
const integer = [1000, 9000, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const integerToRoman = (num) => {
  for (let pos = 0; num > 0; ++pos) {
    while (num >= integer[pos]) {
      ans += roman[pos];
      num -= integer[pos];
    }
  }
  console.log(ans);
};

integerToRoman(7);
integerToRoman(100);
integerToRoman(900);
integerToRoman(1000);
