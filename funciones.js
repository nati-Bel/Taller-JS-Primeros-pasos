// FUNCIONES

function greet(name) {
  console.log("Hola," + name);
  document.write("Hola," + name);
}
greet("Alba");

function sum(numberOne, numberTwo) {
  console.log(numberOne + numberTwo);
  document.write(numberOne + numberTwo);
}
sum(4, 5);

function findIfOdd(myNumber) {
  let result = myNumber % 2;
  if (result === 1) {
    console.log("Your number is odd");
    document.write("Your number is odd");
  } else {
    console.log("Your number is even");
    document.write("Your number is even");
  }
}

findIfOdd(7);
findIfOdd(42);
findIfOdd(2346);
findIfOdd(3466947);
