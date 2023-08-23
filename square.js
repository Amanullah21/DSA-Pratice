const square = (n) => {
  console.log(n);
};

function floorSqrt(x) {
  let i = 0;
  let result = 0;

  while (result < x) {
    i++;
    result = i * i;
  }
  return i * i == x;
}

const n = 10;
for (let i = 0; i <= n; i++) {
  console.log(floorSqrt(i), i);
}
