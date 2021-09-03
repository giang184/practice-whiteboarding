var fibSum = function(n) {
  let array = [1, 1, 2];
  let sum = 0;
  for(let i=3; i<n; i++) {
    array.push(array[i-1] + array[i-2]);
  }
  console.log(array);
  for(let i=1; i<n; i++) {
    if (array[i]%2 ===0 && array[i] < 4000000) {
      sum += array[i];
    }
  }
  return sum;
};

console.log(fibSum(35))
