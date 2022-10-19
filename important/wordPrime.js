// you have given somw word find it is prime or not

const arr = ["ama", "1234",'qwert','qwerty','qwertyu','123456789'];

let count = 0;

for (let i = 0; i < arr.length; i++) {
  let len = arr[i].length;
 for(let j=0;j<len;j++)
  if (len % j == 0) {
    count++;
  }

  console.log(count == 1 ? "prime" : "not prime");
  count = 0;
}
