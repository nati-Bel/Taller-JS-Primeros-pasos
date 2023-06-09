// ARRAYS

let NatisArray = [34, 23, 4, 7, 21, 11, 2, 9, 5, 41];

/* 
for (let i=0; i<NatisArray.length;i++) {
    console.log (NatisArray[i]);
    document.write  (NatisArray[i]);
} */

// function addNumber (newNumber) {
//     NatisArray.push(newNumber);
// }

// addNumber(1);
// allNumbers ();

/* NatisArray=NatisArray.filter(e =>e%2 ===0);
console.log(NatisArray);
document.write(NatisArray); */

function highestNumber() {
  const highest = Math.max(...NatisArray);
  console.log(highest);
  document.write(highest);
}
highestNumber();

function lowestNumber() {
  const lowest = Math.min(...NatisArray);
  console.log(lowest);
  document.write(lowest);
}
lowestNumber();

let myText = "This is my text";
function capitalizeText() {
  let myNewText = myText.toUpperCase();
  console.log(myNewText);
  document.write(myNewText);
}
capitalizeText();

let MyOtherText = "This is my other text";
function lowerCaseText() {
  let myNewLowerText = MyOtherText.toLowerCase();
  console.log(myNewLowerText);
  document.write(myNewLowerText);
}
lowerCaseText();

let myNamesArr = ["suni, fon, nachete"];
for (let i = 0; i < myNamesArr.length; i++) {
  myNamesArr[i] =
    myNamesArr[i].charAt(0).toUpperCase() + myNamesArr[i].slice(1);
  console.log(myNamesArr[i]);
  document.write(myNamesArr[i]);
}
