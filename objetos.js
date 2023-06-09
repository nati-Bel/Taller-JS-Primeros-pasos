// OBJETOS

let car = {
  brand: "Peugeot",
  type: "Partner",
  color: "red",
  numberOfDoors: 5,
  price: {
    new: "17000 euro",
    secondHand: "5000 euro",
  },
};

function tellDoors() {
  console.log(car.numberOfDoors);
  document.write(car.numberOfDoors);
}

tellDoors();

function tellBrand() {
  console.log(car.brand);
  document.write(car.brand);
}
tellBrand();

function tellNewPrice() {
  console.log(car.price.new);
  document.write(car.price.new);
}
tellNewPrice();
