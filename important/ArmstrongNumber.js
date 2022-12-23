const arm = (n) => {
  let ans = 0;
  for (let i = 0; i < n.length; i++) {
    ans += Number(n[i]) ** n.length;
  }
  console.log(ans);
};
arm("153");
