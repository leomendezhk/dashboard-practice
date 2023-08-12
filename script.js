"use strict";

// OBJECTS
//FOR LOOP TO GET KEYS AND VALUES
/* 
const person = {};
person.name = "leo";
person.age = 29;
person.company = "Xccelerate";
console.log(person);

//using Object.entries()
for (const [value, key] of Object.entries(person)) {
  console.log(`${value}: ${key}`);
}

//object.freeze makes object unmutable.

//Convert array into object Object.entries().
const entries = [
  ["location", "hong kong"],
  ["country", "china"],
  ["isAsia", true],
];

console.log(Object.fromEntries(entries));

//ARRAY

//add value to array
let newArray = [];
newArray[0] = "Curry";
newArray[2] = "Lamp";
console.log(newArray);

//add values using method
newArray.push("last");
newArray.unshift("first");

//delete
newArray.pop(); //last
newArray.shift(); //first

//delete target
delete newArray[2];

//looping array

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}
console.log(newArray.length);
console.log(newArray);

//sorting array
//alphabetically just use newArray.sort()

//low to high
//hight to low reversr b-a
const numbers = [1, 43, 2, 56, 7, 8, , 6, 43, 23];
console.log(
  numbers.sort((a, b) => {
    return a - b;
  })
);

console.log(numbers); //mutate original

//ARRAY MAP
//loop over and create new array

//multiply each number and return it in new array
const doubleNumbers = numbers.map((n) => n * 2);
console.log(doubleNumbers);

//ARRAY FILTER
//loop over array and return new array with onlye values that satisfy condition

const numberAbove10 = numbers.filter((n) => n > 10);
console.log(numberAbove10);

//ARRAY REDUCE
//iterates over each value, process them and  add it to new one

const sums = numbers.reduce((a, b) => a + b);
console.log(sums);

const namesArr = ["leo", "dima", "liz"];
const newNames = namesArr.reduce((a, b) => [...a, b], ["1"]);
console.log(newNames);

/////////////////////////////////////////

//Object assign to others using =
//if modify one it with modify the other

const a = { p: 1, q: 2 };
const b = a;
b.z = 3;
console.log(a);
console.log(b);

//clone without link using spread
const c = { ...a };
c.x = 4;
console.log(a);
console.log(c);

//or assing with {}
const v = Object.assign({}, a);
v.w = 5;
console.log(v);
console.log(a);

//To make both the keys and values of a JavaScript object read-only, we can use the method Object.freeze(). To fix the keys only from editing while still keeping their values editable, we can use Object.seal()

var players = [
  { name: "Lionel Messi", club: "FC Barcelona" },
  { name: "Christiano Ronaldo", club: "Real Madrid" },
  { name: "Luis Suarez", club: "FC Barcelona" },
  { name: "Gareth Bale", club: "Real Madrid" },
  { name: "Manuel Neuer", club: "FC Bayern Munchen" },
];

const real = players.filter((p) => p.club === "Real Madrid").map((p) => p.name);

console.log(real);

//////////////////////////////////

var marks = [
  { mark: 99 },
  { mark: 80 },
  { mark: 60 },
  { mark: 70 },
  { mark: 50 },
  { mark: 67.6 },
  { mark: 62.4 },
  { mark: 87.5 },
  { mark: 55 },
];

let avgMark = Math.round(
  marks.map((a) => a.mark).reduce((acc, mark) => acc + mark) / marks.length
);
console.log(avgMark);

/////////////////////////////////

function uefaEuro2016(teams, score) {
  if (score[0] > score[1]) {
    return console.log(`${teams[0]} won`);
  } else if (score[0] < score[1]) {
    return console.log(`${teams[1]} won`);
  } else {
    return console.log("it's a draw");
  }
}

// the function should result in
uefaEuro2016(["Germany", "Ukraine"], [2, 0]); // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(["Belgium", "Italy"], [0, 2]); // "At match Belgium - Italy, Italy won!"
uefaEuro2016(["Portugal", "Iceland"], [1, 1]); // "At match Portugal - Iceland, teams played draw."

////////////////////////////////////

const transform = function (n) {
  const alphabet = ["j", "a", "b", "c", "d", "e", "f", "g", "h", "i"];

  return console.log(
    n
      .split("")
      .sort()
      .map((num) => alphabet[parseInt(num)])
      .reduce((acc, t) => acc + t)
  );
};

transform("213"); // abc

////////////////////////////////////

function middle(arr) {
  //find max and min
  const max = Math.max(...arr); //3
  const min = Math.min(...arr); ///1

  //6 - 3- 1 = 2
  const middle = arr.reduce((a, b) => a + b) - max - min;

  return arr.indexOf(middle);
}

console.log(middle([2, 3, 1]));
console.log(middle([88, 7, 55]));

/////////////////////////////////

function move(str) {
  const letterArray = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    str
      .split("") //split each character

      //iterate over each character
      .map((char) => {
        //get the unicode of char and rest 97 so i work with small numer.
        //example c is 99 - 97 = 3. c = 3
        const code = char.charCodeAt() - "a".charCodeAt();
        //3 + 10 = 13
        //if code + 10 is more than 26 (lenght of alphabet) then come back.
        //t = 19, 19+10 = 29, 29 % 26 = 3
        const newCode = (code + 10) % letterArray.length;
        return letterArray[newCode];
      })
      .join("")
  );
}

console.log(move("dog"));
console.log(move("a"));
console.log(move("z"));
 */
/////////////////////////////////////////////

// FTSEU1: Full-Stack Web Development Immersive - Unit 1. Web Development Fundamentals

//Prototype & Classes
//Classes and constructors

//Exercise: Creating a Person
/* Create a class named Person, it has two properties, name, and age. You pass both properties through the constructor. Call this constructor to initialize a new Person. Remember to upload the code you created to Github. */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const newPerson = new Person("Leo", 29);
console.log(newPerson);

//Exercise: Game Developer

/* Imagine that you are a game developer who develops text-based games. Create a class named Player it needs:

A unique name
A health property
An attack method that reduces the opponent's health by 10 per attack.
Initialize two instances of your class Player
Write a function that randomly decides which player attacks.  Math.random() could be handy. After each attack console.log who was attacked.
This function will need to continue until one of instances has 0 health left, the other player should be declared the winner when a player has been defeated. Please console.log the victor. */

class Player {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  attack(opponent) {
    opponent.health -= 10;
    console.log(
      `${this.name} attacks ${opponent.name}, ${opponent.name} has ${opponent.health}  health`
    );
  }
}

const player1 = new Player("Player 1", 100);
const player2 = new Player("Player 2", 100);
console.log(player1, player2);

const fight = function (player1, player2) {
  while (player1.health > 0 && player2.health > 0) {
    Math.random() > 0.5 ? player2.attack(player1) : player1.attack(player2);

    if (player1.health == 0) console.log(`${player2.name} wins`);
    if (player2.health == 0) console.log(`${player1.name} wins`);
  }
};

fight(player1, player2);
