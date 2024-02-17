let instances = 0;
function createCounterFunction() {
  let invocations = 0;

  function counterFunction() {
    invocations++;
    return `Invocations: ${invocations}, Instances: ${instances}`;
  }

  instances++;
  return counterFunction;
}

const myFunction = createCounterFunction();
console.log(myFunction()); 
console.log(myFunction());

const anotherFunction = createCounterFunction();
console.log(anotherFunction()); 
console.log(anotherFunction()); 