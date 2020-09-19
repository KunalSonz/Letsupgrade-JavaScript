let person = [
  {
    name: "First",
    age: 18,
    city: "Mumbai",
    salary: 16000,
  },
  {
    name: "Second",
    age: 20,
    city: "Pune",
    salary: 20000,
  },
  {
    name: "Third",
    age: 26,
    city: "Hyderabad",
    salary: 40000,
  },
  {
    name: "Fourth",
    age: 26,
    city: "Bangalore",
    salary: 100000,
  },
  {
    name: "Fifth",
    age: 30,
    city: "Mumbai",
    salary: 120000,
  },
];

let idno;

function display(givenArray) {
  let tableData = "";
  let srno = 1;

  givenArray.forEach(function (persons) {
    console.log(persons);
    let currentrow = `<tr >
    <td>${srno}</td>
    <td>${persons.name}</td>
    <td>${persons.age}</td>
    <td>${persons.city}</td>
    <td>${persons.salary}</td>
    <td><button onclick="delet(${srno - 1})" id="${srno}">delete</button>
    
    </td>
    </tr>`;

    tableData += currentrow;
    srno++;
  });

  document.getElementById("tdata").innerHTML = tableData;
}

display(person);

function delet(index) {
  person.splice(index, 1);
  display(person);
}

function searchByName() {
  let searchvalue = document.getElementById("serc").value;

  let nameData = person.filter(function (persons) {
    nam = persons.name.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1;
    return nam;
  });

  let cityData = person.filter(function (persons) {
    cit = persons.city.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1;
    return cit;
  });

  display(nameData);
  display(cityData);
}
//--------------------------------------
window.onload = function () {
  let arBuses = [];
  if (localStorage.getItem("Buses") == null) {
    localStorage.setItem("Buses", JSON.stringify(arBuses));
  }
};

function busDisplay(superArray = undefined) {
  let tableData = "";
  let srno = 1;
  let Buses;
  if (superArray == undefined) {
    Buses = JSON.parse(localStorage.getItem("Buses"));
  } else {
    Buses = superArray;
  }
  Buses.forEach(function (Buses) {
    let currentrow = `<tr >
    <td>${Buses.name}</td>
    <td>${Buses.source}</td>
    <td>${Buses.destinatin}</td>
    <td>${Buses.busnumber}</td>
    <td>${Buses.capacity}</td>
    
    
    </td>
    </tr>`;

    tableData += currentrow;
    srno++;
  });

  document.getElementById("tab2").innerHTML = tableData;
}

busDisplay();

function addBus(event) {
  event.preventDefault();
  let bus = {};
  name = document.getElementById("name").value;
  source = document.getElementById("source").value;
  destinatin = document.getElementById("destination").value;
  no = document.getElementById("busno").value;
  capacity = document.getElementById("capcity").value;
  console.log(name);
  bus.name = name;
  bus.source = source;
  bus.destinatin = destinatin;
  bus.busnumber = no;
  bus.capacity = capacity;

  let Buses = JSON.parse(localStorage.getItem("Buses"));

  Buses.push(bus);
  localStorage.setItem("Buses", JSON.stringify(Buses));

  console.log(Buses);
  busDisplay();
}

function searchByBus() {
  let searchvalue = document.getElementById("serc2").value;
  let Buses = JSON.parse(localStorage.getItem("Buses"));
  let destiData = Buses.filter(function (bus) {
    desti =
      bus.destinatin.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1;
    return desti;
  });

  let sourData = Buses.filter(function (bus) {
    sour = bus.source.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1;
    return sour;
  });

  busDisplay(destiData);
  busDisplay(sourData);
}
