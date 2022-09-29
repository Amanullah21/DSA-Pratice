const Prime = (n) => {
  let Boolean = false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      Boolean = true;
    }
  }
  Boolean == true
    ? console.log(n + " is Not Prime")
    : console.log(n + " is prime");
};
Prime(4);
Prime(5);
Prime(6);
Prime(7)
Prime(8)
