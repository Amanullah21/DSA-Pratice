// const Prime = (n) => {
//   let Boolean = false;
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       Boolean = true;
//     }
//   }
//   Boolean == true
//     ? console.log(n + " is Not Prime")
//     : console.log(n + " is prime");
// };
// Prime(4);
// Prime(5);
// Prime(6);
// Prime(7)
// Prime(8)

const prime = (n) => {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count >= 1) {
    console.log("Not prime");
  } else {
    console.log("prime");
  }
};
prime(6);
