const factorial = (n) => {
  if (n == 1) {
    return n;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));

const factorial1 = (n) => {
  if (n == 1) {
    return 1;
  }
  return n * factorial1(n - 1);
};
console.log(factorial1(5));
