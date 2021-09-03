//Question 1
const urlRecursion = (string) => {
  array = string.split(' ');
  len = array.length;
  if (len <= 1){
    return string;
  } else {
    return `${array[0]}%20${urlRecursion(array.slice(1).join(' '))}`;
  }
}
console.log(urlRecursion("hello there my friend"));

const urlRecursion = (string) => {
  array = string.split(' ');
  len = array.length;
  if (len <= 1){
    return string;
  } else {
    return `${array[0]}%20${urlRecursion(array.slice(1).join(' '))}`;
  }
}

const url = (string) => {
  array = string.split('');
  for(let i=0; i< array.length; i++) {
    if(array[i] === ' ') {
      array[i] = '%20';
    }
  }
  return array.join('');
} 

console.log(url("hello there my friend"));

//Question 2

//inefficient because this will have a runtime of O(n^2)
const deduping = (array) => {
  for(let i=0; i<array.length - 1; i++) {
    for(let k=i+1; k<array.length; k++) {
      if(array[i]===array[k]) {
        array.splice(k,1);
        k--;
      }
    }
  }
  return array;
}

const dedupingFilter = (array) => {
  result = [];
  
  while(array.length > 0) {
    result.push(array[0]);
    array=array.filter(word => word != array[0]);
  }
  return result;
}

console.log(dedupingFilter([7, 9, "hi", 12, "hi", 7, 53]));

const dedupingRecursion = (array) => {
  let result = [];
  if(array.length === 0) {
    return [];
  }
  else if(array.length === 1) {
    result.push(array[0]);
    return result;
  }
  else {
    result.push(array[0]);
    //dedupe
    for(let k = 1; k<array.length; k++) {
      if (array[0] === array[k]) {
        array.splice(k,1);
        k--;
      }
    }

    previousArray = dedupingRecursion(array.splice(1));
    for(let i=0; i<previousArray.length; i++) {
      result.push(previousArray[i]);
    }

    return result;
  }
}
//more efficient because this will have a runtime of O(n)
const dedupingMap = (array) => {
  let myMap = new Map();
  for(let i=0; i<array.length;i++) {
    myMap.set(array[i],i);
  }
  return Array.from(myMap.keys());
}
console.log(dedupingMap([7, 9, "hi", 12, "hi", 7, 53]));

const dedupingSet = (array) => {
  let mySet = new Set();
  for(let i=0; i<array.length;i++) {
    mySet.add(array[i]);
  }
  return Array.from(mySet);
}
console.log(dedupingSet([7, 9, "hi", 12, "hi", 7, 53]));

//#3
const compressR = (string) => {

  if(string.length === 0) {
    return "";
  }
  else {
    let count = 1;
    while(string[count]===string[0]) {
        count++;
    }
    const remaining = string.substring(count);
    console.log(remaining);
    if (count > 1) {
      return `${count}${string[0]}${compressR(remaining)}`;
    }
    else {
      return `${string[0]}${compressR(remaining)}`;
    }
  }
}
console.log(compressR("aaabccdddda"));

const compress = (string) => {

  if(string.length === 0) {
    return "";
  }
  else {
    let result = "";
    for(let i=0; i<string.length; i++) {
      let count=1;
      while(string[i]===string[i+count]) {
        count++;
      }
      if (count >1) {
        result += `${count}${string[i]}`;
      }
      else {
        result += `${string[i]}`;
      }
      i += count-1;
    }
    return result;
  }
}
console.log(compress("aaabccdddda"));







//#4
//inefficient because this will have a runtime of O(n^2)
const unique = (string) => {
  let result = true;
  for(let i=0; i<string.length - 1; i++) {
    for(let k=i+1; k<string.length; k++) {
      if(string[i]===string[k]) {
        result = false;
      }
    }
  }
  return result;
}

console.log(unique(""));


const uniqueSet = (string) => {
  let set1 = new Set();
  for(let i=0; i<string.length; i++) {
    set1.add(string[i]);
  }
  return string.length === set1.size;
}
console.log(uniqueSet("copyright"));