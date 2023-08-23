const Armstrong = (n) => {
  let str = n + "";
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]) ** str.length;
  }
  return str == sum;
};

n = 10000000;
for (let i = 1; i <= n; i++) {
  if (Armstrong(i)) {
    console.log(i, true);
  }
}
