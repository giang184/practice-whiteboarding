const reverse = (string) => {
  if (string === "") {
    return "";
  } else if (string.split(" ").length === 1){
    return string;
  } else {
    splitString = string.split(" ");
    return `${splitString.pop()} ${reverse(splitString.join(' '))}`;
  }
}
console.log(reverse("hello there my friend"));

const concat = (x) => {
  if(x<1) {
    return "";
  } else if (x===1) {
    return "red green refactor";
  } else {
    return `red green refactor ` + concat(x-1);
  }
}

console.log(concat(4));

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  
  if (rowIndex ===0) {
    return [1];
  } else if (rowIndex === 1) {
    return [1, 1];
  } else {
    result = [];
    result.push(1);
    previousRow = getRow(rowIndex-1);
    for(let i =1; i< rowIndex; i++) {
      result.push(previousRow[i] + previousRow[i+1]);
    }
    result.push(1);
    return result;
  }
};

console.log(getRow(1));

