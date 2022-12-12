const arr = [3, 3, 2, 2, 1, 1, 1];
const obj = {};

//1 way
const frequancyCount = (arr) => {
  const obj = {};
  for (const key of arr) {
    obj[key] = obj[key] + 1 || 1;
  }
  console.log(obj, "1st way");
  for(key in obj){
    console.log(key,obj[key])
  }
};
frequancyCount(arr, obj);

const frequancyCount1 = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  console.log(obj, "2nd way");
};

frequancyCount1(arr, obj);

// 2nd way
const frequancyCount2 = (arr, obj) => {
  for (const key of arr) {
    if (obj[key]) {
      obj[key] = obj[key] + 1;
    } else {
      obj[key] = 1;
    }
  }
  console.log(obj, "3rd way");
};

frequancyCount2(arr, obj);

// 3rd way
const frequancyCount3 = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj, "4th way");
};

frequancyCount3(arr, obj);

const freCout =(arr,obj)=>{
    for(const key of arr){
      obj[key] = obj[key]+1 || 1
    }

    console.log(obj)
}
freCout(arr,obj)
