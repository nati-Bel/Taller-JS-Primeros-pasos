//DOM

function showMessage() {
  alert("Coffee or tea?");
}
let button = document.querySelector(".button");
button.addEventListener("click", showMessage);

let headline = document.getElementById("headlineOne");
headline.textContent = "Javascript mola, se merece una ola";

function showHide() {
  var fantoma = document.getElementById("text");
  if (fantoma.style.display === "none") {
    fantoma.style.display = "block";
  } else {
    fantoma.style.display = "none";
  }
}

const magicButton = document.querySelector("#magicButton");
magicButton.addEventListener("click", showHide);

let namesArray = [
  "Kika",
  "Lubi",
  "Reni",
  "Sami",
  "Fon",
  "Peti",
  "Max",
  "Atos",
  "Suni",
  "Tina",
];
/* for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
    document.write(namesArray[i]);
} */
let list = document.getElementById("my-list");
for (i = 0; i < namesArray.length; i++) {
  let li = document.createElement("li");
  li.innerText = namesArray[i];
  list.appendChild(li);
}

let digitArray = [34, 23, 4, 7, 21, 11, 2, 9, 5, 41];

let digitNumber = digitArray.length;
function tellNumber() {
  let sentence = document.getElementById("digitSentence");
  sentence.textContent = `The hidden array has ${digitNumber} numbers`;
}
tellNumber();

function createForm() {
  let form = document.createElement("form");
  let title = document.createElement("label");
  title.textContent = "This is the title of the form";
  let textBox = document.createElement("input");

  form.appendChild(title);
  form.appendChild(textBox);

  document.getElementById("myForm").appendChild(form);
}
createForm();

function createTableN() {
  let table = document.createElement("table");
  let tblBody = document.createElement("tbody");

  table.appendChild(tblBody);
  document.getElementById("myTable").appendChild(table);

  let rowOne = document.createElement("tr");
  let inputOne = document.createElement("th");
  inputOne.innerHTML = "Country";
  let inputTwo = document.createElement("th");
  inputTwo.innerHTML = "Capital";

  rowOne.appendChild(inputOne);
  rowOne.appendChild(inputTwo);
  tblBody.appendChild(rowOne);

  let rowTwo = document.createElement("tr");
  let rowTwoInputOne = document.createElement("td");
  rowTwoInputOne.innerHTML = "Slovakia";
  let rowTwoInputTwo = document.createElement("td");
  rowTwoInputTwo.innerHTML = "Bratislava";

  rowTwo.appendChild(rowTwoInputOne);
  rowTwo.appendChild(rowTwoInputTwo);
  tblBody.appendChild(rowTwo);
}
createTableN();

//OBJETOS
let array = [
  {
    id: "1",
    name: "Patan",
    status: "en adopcion",
    species: "can",
    type: "pastor aleman",
    gender: "macho",
  },
  {
    id: "2",
    name: "Michin",
    status: "adpotado",
    species: "gato",
    type: "siames",
    gender: "macho",
  },
  {
    id: "3",
    name: "Luna",
    status: "en acogida",
    species: "can",
    type: "boxer",
    gender: "hembra",
  },
  {
    id: "4",
    name: "Duna",
    status: "en acogida",
    species: "can",
    type: "pudel",
    gender: "hembra",
  },
  {
    id: "5",
    name: "Bob",
    status: "adoptado",
    species: "gato",
    type: "comun",
    gender: "macho",
  },
  {
    id: "6",
    name: "Bilbo",
    status: "adoptado",
    species: "can",
    type: "mastin",
    gender: "macho",
  },
  {
    id: "7",
    name: "Chewie",
    status: "en acogida",
    species: "can",
    type: "terier",
    gender: "macho",
  },
  {
    id: "8",
    name: "Sendy",
    status: "en adopcion",
    species: "can",
    type: "mestiza",
    gender: "hembra",
  },
  {
    id: "9",
    name: "Rico",
    status: "en acogida",
    species: "can",
    type: "mestizo",
    gender: "macho",
  },
  {
    id: "10",
    name: "Julio",
    status: "adoptado",
    species: "gato",
    type: "comun",
    gender: "macho",
  },
];

function createTable() {
  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headers = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.innerHTML = "Id";
  const th2 = document.createElement("th");
  th2.innerHTML = "Name";
  const th3 = document.createElement("th");
  th3.innerHTML = "Status";
  const th4 = document.createElement("th");
  th4.innerHTML = "Species";
  const th5 = document.createElement("th");
  th5.innerHTML = "Type";
  const th6 = document.createElement("th");
  th6.innerHTML = "Gender";
  headers.appendChild(th1);
  headers.appendChild(th2);
  headers.appendChild(th3);
  headers.appendChild(th4);
  headers.appendChild(th5);
  headers.appendChild(th6);
  thead.appendChild(headers);

  const tbody = document.createElement("tbody");

  array.forEach((animal) => {
    const dataRow = document.createElement("tr");
    const data1 = document.createElement("td");
    const data2 = document.createElement("td");
    const data3 = document.createElement("td");
    const data4 = document.createElement("td");
    const data5 = document.createElement("td");
    const data6 = document.createElement("td");

    data1.innerHTML = `${animal.id}`;
    data2.innerHTML = `${animal.name}`;
    data3.innerHTML = `${animal.status}`;
    data4.innerHTML = `${animal.species}`;
    data5.innerHTML = `${animal.type}`;
    data6.innerHTML = `${animal.gender}`;

    dataRow.appendChild(data1);
    dataRow.appendChild(data2);
    dataRow.appendChild(data3);
    dataRow.appendChild(data4);
    dataRow.appendChild(data5);
    dataRow.appendChild(data6);

    tbody.appendChild(dataRow);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  document.body.appendChild(table);
}

createTable(array);
