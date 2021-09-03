var fib = function(n) {
  let cache = new Map();
  let recursion = (num) => {
    if(cache.has(num)) {
      return cache.get(num);
    }
    if(num === 0) {
      return 0;
    } else if (num === 1 || num === 2) {
      return 1
    } else {
      cache.set(num, recursion(num-2) + recursion(num -1));
      return cache.get(num);
    }
  }
  return recursion(n);
};