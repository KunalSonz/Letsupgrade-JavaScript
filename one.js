// let name = "kunal";
// let surname = "sonawane";

// let a = `first name ${name} surname ${surname}`;

// console.log(a);
// console.log(name.replace("una", "ooo"));
// console.log(surname.substr(4, 4));
// console.log(name[0]);

// data = ["23", "kunal", "let surname"];
// console.log(data[2]);

// console.log("for loop");

// for (let i = 1; 10 <= i >= 2; i++) {
//   console.log(i);
// }

// console.log("do while loop");

// let n = 1;
// do {
//   console.log(n);
//   n++;
// } while (n <= 10 && n >= 2);

//-------------------ASSIGNMENTS--------------------------------------------------------------
//1
// let b = "getstrong";
// for (i = 0; i < b.length; i++) {
//   // console.log(b[i]);
//   if (b[i] == "o") {
//     console.log(b[i] + " element present");
//   }
// }
// //2

// let c = 12;
// let d = c * 60;
// console.log(c + " minutes = " + d + " seconds");

// //3

// let e = ["g", "e", "t", "s", "t", "r", "o", "n", "g", "e", "r"];
// for (i = 0; i < e.length; i++) {
//   // console.log(b[i]);
//   if (e[i] == "o") {
//     console.log(e[i] + " element present");
//   }
// }

// //4
// let g = ["name", "place", "animal", "thing"];
// for (i = 0; i < g.length; i++) {
//   for (j = 0; j < g[i].length; j++) {
//     if (g[i][j] == "p") {
//       console.log(g[i]);
//     }
//   }
// }

// //5
// let f = ["g", "e", "t", "s", "t", "r", "o", "n", "g", "e", "r"];
// for (let i = f.length - 1; i < f.length; i--) {
//   if (i == -1) {
//     break;
//   } else {
//     console.log(f[i]);
//   }
// }
//--------------------------------------------------------------------------------------------

// const add = function (num1, num2) {
//   let result = num1 + num2;
//   return result;
// };

// let a = add(3, 7);
// console.log("from a " + a);

// const add = function (num1, num2 = 8) {
//   let result = num1 + num2;
//   return result;
// };

// let a = add(3);
// console.log("from a " + a);

// let avenger = {
//   name: "thor",
//   age: 1500,
//   weapons: ["hammer", "newhammer"],
// };

// let nam = "name";

// console.log(avenger);
// console.log(avenger.name);
// console.log(avenger["age"]);
// console.log(avenger[nam]);
// console.log(avenger.weapons[1]);

// avenger.weapons.forEach(function (weapon) {
//   console.log(weapon);
// });

// let avenger = {
//   name: "thor",
//   age: 1500,
//   weapons: ["hammer", "newhammer"],
//   address: {
//     planet: "asgard",
//     home: "earth",
//   },
//   printfunc: function () {
//     console.log(this.address);
//   },
// };

// let nam = "name";

// console.log(avenger.address.home);

// avenger.printfunc();

// avenger.weapons.forEach(function (weapon) {
//   console.log(weapon);
// });

// let avengers = [
//   {
//     name: "thor",
//     age: 125,
//   },
//   {
//     name: "ironman",
//     age: 50,
//   },
//   {
//     name: "blackpanther",
//     age: 40,
//   },
// ];

// console.log(avengers[2].name);

// for (let i = 0; i < avengers.length; i++) {
//   console.log(avengers[i].name);
// }

//window.location="www.google.com";
