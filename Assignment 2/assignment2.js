//Question 1
function change() {
  console.log("changing");
  document.getElementById("blueimg").style.display = "none";
  document.getElementById("redimg").style.display = "block";
  document.getElementById("greenimg").style.display = "none";
}

function changea() {
  console.log("changing a");
  document.getElementById("redimg").style.display = "none";
  document.getElementById("greenimg").style.display = "block";
  document.getElementById("blueimg").style.display = "none";
}

function reset() {
  console.log("resetiing");
  document.getElementById("redimg").style.display = "none";
  document.getElementById("greenimg").style.display = "none";
  document.getElementById("blueimg").style.display = "block";
}

//Question2
function paster() {
  let a = document.getElementsByTagName("input")[0].value;
  document.getElementsByTagName("input")[1].value = a;
}

//Question3

let barry = [
  {
    name: "jhon",
    age: 25,
    country: "USA",
    hobby: ["read", "write"],
  },
  {
    name: "Rosa",
    age: 33,
    country: "Mexico",
    hobby: ["boxing", "singing"],
  },
  {
    name: "Jamal",
    age: 50,
    country: "Russia",
    hobby: ["skate", "dance"],
  },
  {
    name: "Raju",
    age: 9,
    country: "India",
    hobby: ["read", "write"],
  },
  {
    name: "Prachi",
    age: 82,
    country: "India",
    hobby: ["public speaking", "fitness"],
  },
  {
    name: "Faruk",
    age: 46,
    country: "Mexico",
    hobby: ["sports", "Fitness"],
  },
];

function doMake() {
  console.log(barry);
}

doMake();

//Questiin4
function getAge() {
  for (let i = 0; i < barry.length; i++) {
    let age = barry[i].age;
    if (age <= 30) {
      console.log(barry[i].name);
    }
  }
}

getAge();

console.log(" ");

function getCountry() {
  for (let i = 0; i < barry.length; i++) {
    let country = barry[i].country;
    if (country == "India") {
      console.log(barry[i].name);
    }
  }
}

getCountry();
