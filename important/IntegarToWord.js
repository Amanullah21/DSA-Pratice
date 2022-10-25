const getTensWord = (tens) =>
  [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ][tens];
const getUnderTwentyWord = (num) =>
  [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ][num];

var numberToWords = function (num) {
  if (num < 20) return getUnderTwentyWord(num);

  let billions = Math.floor(num / Math.pow(10, 9));
  let millions = Math.floor(
    (num - billions * Math.pow(10, 9)) / Math.pow(10, 6)
  );
  let thousands = Math.floor(
    (num - billions * Math.pow(10, 9) - millions * Math.pow(10, 6)) / 1000
  );
  let hundreds = Math.floor(
    (num -
      billions * Math.pow(10, 9) -
      millions * Math.pow(10, 6) -
      thousands * 1000) /
      100
  );
  let tens = Math.floor(
    (num -
      billions * Math.pow(10, 9) -
      millions * Math.pow(10, 6) -
      thousands * 1000 -
      hundreds * 100) /
      10
  );
  let ones =
    num -
    (billions * Math.pow(10, 9) +
      millions * Math.pow(10, 6) +
      thousands * 1000 +
      hundreds * 100 +
      tens * 10);

  // Change to a '-teen' word
  if (tens === 1 && ones > 0) {
    tens = 0;
    ones += 10;
  }

  const str = `${billions ? numberToWords(billions).concat(" Billion ") : ""}${
    millions ? numberToWords(millions).concat(" Million ") : ""
  }${thousands ? numberToWords(thousands).concat(" Thousand ") : ""}${
    hundreds ? numberToWords(hundreds).concat(" Hundred ") : ""
  }${tens ? getTensWord(tens).concat(" ") : ""}${
    ones ? numberToWords(ones) : ""
  }`.trim();

  return str;
};
console.log(numberToWords(5));
