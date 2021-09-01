const canEat = (creature) => ({
    eat : (food) => {
      return `the ${creature.name} eats the ${food}.`
    }
});

const canSleep = (creature) => ({
    sleep: () => {
      return `the ${creature.name} sleeps.`
    }
});

const creature = function(name) {
  let state = {
    name
  }

  return { ...state, ...canEat(state), ...canSleep(state) };
}
const cat = creature("cat");
console.log(cat.sleep());

const dog = creature("fido");
console.log(dog.eat("babe"));