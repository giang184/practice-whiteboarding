/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let cache = new Map();
  let recursion = (stairs) => {
    if(cache.has(stairs)) {
      return cache.get(stairs);
    }
    if(stairs <= 3) {
      return stairs;
    } else {
      cache.set(stairs, recursion(stairs-2)+ recursion(stairs -1));
      return cache.get(stairs);
    }
  }
  return recursion(n);
};

console.log(climbStairs(4));
