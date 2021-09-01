//input: float
//output: array where the elements are [quarter, dimes, nickels, pennies]

export const coinCounter = (money, result = {quarters:0, dimes:0, nickels:0, pennies:0}) => {
  //retrieve integer cents 38
  const cents = (money*100)%100;

  //base case
  if (cents < 1) {
    return result;
  } else if (cents >= 25) {
    return coinCounter((cents-25)/100, {quarters: result.quarters+1, dimes: result.dimes, nickels: result.nickels, pennies: result.pennies});
  } else if (cents >= 10) {
    return coinCounter((cents-10)/100, {quarters: result.quarters, dimes: result.dimes+1, nickels: result.nickels, pennies: result.pennies});
  } else if (cents >= 5) {
    return coinCounter((cents-5)/100, {quarters: result.quarters, dimes: result.dimes, nickels: result.nickels +1, pennies: result.pennies});
  } else {    
    return coinCounter((cents-1)/100, {quarters: result.quarters, dimes: result.dimes, nickels: result.nickels, pennies: result.pennies +1});
  }
}

export const coinCounterClosure = (cents) => {
  const numQuarters = Math.floor(cents/25);
  const numDimes = Math.floor((cents - 25*numQuarters)/10);
  const numNickels = Math.floor((cents - 25*numQuarters - 10*numDimes)/5);
  const numPennies = cents - 25*numQuarters - 10*numDimes - 5*numNickels;

  return () => {
    return `${numQuarters} quarters, ${numDimes} dimes, ${numNickels} nickels, ${numPennies} pennies`;
  }
}

console.log(coinCounterClosure(57)());

console.log("hello");