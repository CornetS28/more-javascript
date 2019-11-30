const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count;
    }
  }
}

const counter = createCounter();

counter.increment()
counter.decrement()
counter.increment()

console.log(counter.get());

const adder = (a) => {
  return (b) => {
    return a + b
  }
}

const add5 = adder(5);

console.log(add5(5))
console.log(add5(-2))

const add30 = adder(30)
console.log(add30(-20));

const createTipper = (tipBase) => {
  return (total)=> {
    return total * tipBase
  }
}

const tip20 = createTipper(.2)


console.log(tip20(100))