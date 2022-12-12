function generateAllSubsequence(str, n, index = -1, current = "") {
  if (index == n) return;

  if (current.length > 0) {
    console.log(current);
  }

  for (let i = index + 1; i < n; i++) {
    current += str[i];
    generateAllSubsequence(str, n, i, current);

    current = current.slice(0, -1);
  }
  return;
}
let str = "abcd";
generateAllSubsequence(str, str.length);
