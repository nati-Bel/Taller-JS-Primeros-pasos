// VARIABLES

let nombre = "William";
let apellido  = "Shakespeare";
let numeroDeObras = 150;
let vivo= false;
document.write (nombre, apellido, numeroDeObras, vivo)

let operacionUno = numeroDeObras + 20
let operacionDos = numeroDeObras -23
let operacionTres = numeroDeObras * 4
let operacionCuatro = numeroDeObras / 2
document.write (operacionUno, " ", operacionDos," ", operacionTres, " " , operacionCuatro)

let nombreCompleto = nombre + apellido
document.write (nombreCompleto)

// FUNCIONES

function greet (name) {
    console.log ("Hola,"+ name)
    document.write ("Hola," + name)}
greet ("Alba")

function sum (numberOne, numberTwo) {
    console.log (numberOne+numberTwo)
    document.write (numberOne+numberTwo)
}
sum (4, 5)

function findIfOdd (myNumber) {
  let result = myNumber%2
    if (result === 1) {console.log ("Your number is odd")
    document.write ("Your number is odd")}
        else {console.log ("Your number is even")
        document.write ("Your number is even")}
    }   

findIfOdd(7)
findIfOdd(42)
findIfOdd(2346)
findIfOdd(3466947)

// OBJETOS

let car= {
    brand: 'Peugeot',
    type:'Partner',
    color:'red',
    numberOfDoors:5,
    price: {
        new: '17000 euro',
        secondHand:'5000 euro'}
    }

function tellDoors () {
    console.log (car.numberOfDoors)
    document.write(car.numberOfDoors)
}
tellDoors()

function tellBrand () {
    console.log(car.brand)
    document.write(car.brand)
}
tellBrand()

function tellNewPrice () {
    console.log(car.price.new);
    document.write(car.price.new);
}
tellNewPrice()

// ARRAYS

let NatisArray = [34, 23, 4, 7, 21, 11,2,9,5, 41]

function allNumbers () {
    console.log (NatisArray);
    document.write (NatisArray);
}
allNumbers()

function addNumber (newNumber) {
    NatisArray.push(newNumber);
}

addNumber(1)
allNumbers ()


