

const f = n => n<=1 ? 1:n*f(n-1)
let g = f(4)
console.log(g);

let x = ['1','2','15','-7','300']
let y = x.sort()
console.log(y);

function build(sen){
  let root ={}
  sen.forEach(s =>{
    let base = root;
    s.split(' ').forEach(word =>{
      if(base[word] === undefined){
        base[word] ={}
      }
      base = base[word]
    })
  })
  return root
}
let tree = build(['hello word','hello there'])

console.log(tree);

function hasPosneg(arr){
  let pos = false
  let neg = false

  arr.forEach(num =>{
    pos = num>0
    neg = num<0
  })
  return [pos,neg]
}
console.log(hasPosneg([2,3,4]));

function sortBy(arr,pro){
  return arr.sort((a,b) =>{
    if(a[pro] < b[pro]) return -1
    if(a[pro] > b[pro]) return 1
      return 0
  })
}
console.log(sortBy([1,2,3],8))

function fun(a,b){
  a+=1
  b.push(1)
}
const a =0
const b =[]
fun(a,b)
console.log(a,b);

function xyz(arr){
  let temp =0
  for(const x of arr){
    if(x% 2 ==1){
      temp+=1
    }else{
      temp =0
    }
    if(temp ==3){
      return true
    }
  }
  return false
}
console.log(xyz([4,5,7,23,12]));

let x1 = 'fox'
function first(){
  console.log(x1);
}
x1 = 'dog'
function sec(){
  let x1 = 'log'
  first()
}
// console.log(sec());
sec()

const obj ={
  prop:1
}
console.log(obj.prop);

Object.defineProperties(obj,'prop',{
  writable:false,
  value:2
})
console.log(obj.prop);

obj.prop =3
console.log(obj.prop)

function d1(x) {return x*2}
const d2 = x => x*2
const d3 = function(x){return x*2}
// const d4 =() => return x*2

console.log(d1(1));
console.log(d2(2));
console.log((d3(3)));

let green 
green = false;
console.log(green);

function fun(y1,y2,...y3){
  const [x1,...[result]] = y3
  console.log(result);
}
const arr1 = ['rock','paper','scissors','lizer','spock']
fun(...arr1)

function* gen1(){
  console.log(yield 1)
  console.log(yield 2);
  console.log(yield 3);
}
const itel = gen1()
console.log(itel.next('a').value)
console.log(itel.next('b').value)
console.log(itel.next('c').value)

let arr = [1,2]
arr.customProperty = true

for(const ele of arr){
  console.log(ele);
}

for(const ind in arr){
  let ele = arr[ind]
  console.log(ele);
}

// for(let )

async function apiC(){
  return new Promise(resolve =>{
    setTimeout(() => {resolve('b')},50)
  })
}
async function logger(){
  setTimeout(()=>console.log('a'),10);
  console.log(await apiC());
  console.log('c');
}

logger()

function lofE(){
  useEffect(()=>{
    console.log('useEffact1');
  })

  useLayoutEffect(()=>{
    console.log('uselayoutEffact1');
  })

  useLayoutEffect(()=>{
    console.log('uselayoutEffact2');
  })

  useEffect(()=>{
    console.log('useEffact2');
  })

}
console.log(lofE());