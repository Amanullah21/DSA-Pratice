const PrintN = (n) => {
  if (n == 0) {
    return;
  }
  console.log(n);
  PrintN(n - 1);
  console.log(n)
};
PrintN(10);
