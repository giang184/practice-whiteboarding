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
    let result = [];
    result.push(1);
    let previousRow = getRow(rowIndex-1);
    for(let i =0; i< rowIndex-1; i++) {
      result.push(previousRow[i] + previousRow[i+1]);
    }
    result.push(1);
    return result;
  }
};

console.log(getRow(6));