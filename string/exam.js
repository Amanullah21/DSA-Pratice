function func1(values) {
  function q1(values) {
    function func3(u, v) {
      if (Math.random() > 0.5) {
        var [x1, y1, z1] = func1(v);
        u = u + 2;
      } else {
        var [x1, y1, z1] = func2(v);
        u = u - 2;
      }
      return Math.abs(x1 * u) + Math.abs(y1 + u) + Math.abs(z1 - u);
    }
    function func2(vx) {
      let [[p, q], [r, s]] = vx;
      return [p * s, q * r, q - r];
    }
    return values
      .slice(1)
      .map((v, i) => [v, values[i]])
      .reduce(func3, 0);
  }
}
let N =6
console.log(func1(N))