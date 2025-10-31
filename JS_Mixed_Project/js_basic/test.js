/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let statusMsg = "starting";

// 2.) Change the value of this variable
statusMsg = "running";

// 3.) Change the data type of this variable
statusMsg = 7;

// 4.) Create another variable and the one from above to concatenate
const note = "Level: " + String(statusMsg);

// 5.) Use string interpolation
console.log(`Note says -> ${note}`);

// ================ Variable Names =================
// (see comment block above)


// =================================================
//                      STRINGS
// =================================================

// Using charAt(), print the letter i in Sabrina
console.log("Sabrina".charAt(4));

// Define Unicode in a comment, and get the Unicode of the 3rd char in Teddy
// Unicode: a universal character encoding standard (code points for characters)
console.log("Teddy".charCodeAt(2)); // 'd' => 100

// Using fromCharCode() - make it readable
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Hello

// Take your first and last name and concat()
const first = "Dewan";
const last = "Mahmud";
console.log(first.concat(" ", last));

// Create a string and make it return true using startsWith()
const greeting = "Hello world";
console.log(greeting.startsWith("Hell")); // true

// Now use any variable with endsWith() and return false
console.log(greeting.endsWith("planet")); // false

// Finish the following sentence. Use includes() and return true.
const ozgur = "Once upon a time Ozgur looked up at the Moon, ";
console.log((ozgur + "and smiled.").includes("Moon")); // true

// Help! Find index of "cow"
const joshHadALittleLambOopsCow =
  "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone.";
console.log(joshHadALittleLambOopsCow.indexOf("cow"));

// lastIndexOf() Vanessa
const vanessa =
  "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace.";
console.log(vanessa.lastIndexOf("Vanessa"));

// Can we use length for strings?
const noWeCantTeo = "but did you try it out though?";
console.log(noWeCantTeo.length);

// replace()
const replaceGokuWithVegeta =
  "For my DBZ fans, we all know Goku is the best!";
console.log(replaceGokuWithVegeta.replace("Goku", "Vegeta"));

// search() case-insensitive for 'wifey'
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4";
console.log(joshIsLookingForWifey.search(/wifey/i));

// slice() other half of pizza
const pizzaSentence = "pizza, other half of pizza";
const commaIdx = pizzaSentence.indexOf(",");
console.log(pizzaSentence.slice(commaIdx + 2));

// Now return only "pizza" (before the comma)
console.log(pizzaSentence.slice(0, commaIdx));

// split() Yaz, Poornima, and Leshawn
const splitTheBill = "Yaz, Poornima, and Leshawn";
console.log(splitTheBill.split(", ").map(s => s.replace("and ", "")));

// split characters
console.log(splitTheBill.split(""));

// toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS.";
const tuanYells = "STOP SHOUTING RIGHT NOW!";
console.log(tuanYells.toLowerCase());

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun";
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase());

// substring()

// Returns "ell"
const basicGreeting = "Hello World";
console.log(basicGreeting.substring(1, 4));

// Returns "JavaScript"
const ohReally = "JavaScript Substring";
console.log(ohReally.substring(0, 10));

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com";
console.log(aslDays.substring(aslDays.indexOf("@") + 1));

// trim()
// extra loving on both sides
const fluffy = "     too much space     ";
console.log(fluffy.trim());

// =================================================
//                     BOOLEAN
// =================================================
const a = 5;
const b = 10;
const c = 15;
const d = "Keke";

// PRINT TRUE please!
console.log(a < b);
console.log(c > b);
console.log(d === d);
console.log(d !== a);
console.log(a === 5);
console.log(a < b && b < c);
console.log(c > b && a < c && d !== a);

// =================================================
//                     LOOPS
// =================================================

// Ken spins 10 times
for (let i = 1; i <= 10; i++) {
  console.log(`Ken's room is spinning... (${i})`);
}

// Teo spins 20 times
for (let i = 1; i <= 20; i++) {
  console.log(`Teo is spinning... (${i})`);
}

// "I'm sorry" 20 times using WHILE
let s = 0;
while (s < 20) {
  console.log("I'm sorry");
  s++;
}

// FOR IN: print keys thing1, thing2, thing3
const whateverQueenBeySaid = {
  thing1: "shoes",
  thing2: "clothes",
  thing3: "gaming console",
};
for (const key in whateverQueenBeySaid) {
  console.log(key);
}

// Using FOR IN, print indexes of the array
const lana = ["l", "a", "n", "a"];
for (const idx in lana) {
  console.log(idx);
}

// USE FOR OF LOOP
const tia = ["teo", "the", "syntax", "of", "this", "is", "cleaner"];
for (const word of tia) {
  console.log(word);
}

// forEach with PS
const perscholas = ["Amira", "Arely", "Jonathan"];
perscholas.forEach((name) => {
  const tag = "PS";
  console.log(`${name} ${tag}`);
});

// =================================================
//                     ARRAYS
// =================================================
const fruits = ["apple", "banana", "orange"];

// Print banana
console.log(fruits[1]);

// Join all elements separated by space
console.log(fruits.join(" "));

// Remove orange
fruits.pop();

// Add strawberry, kiwi, and grapes at the end
fruits.push("strawberry", "kiwi", "grapes");

// Remove apple
fruits.shift();

// Add mango at the beginning
fruits.unshift("mango");

// Add lemon and grapefruit between mango and banana
// Current: ["mango","banana","strawberry","kiwi","grapes"]
fruits.splice(1, 0, "lemon", "grapefruit");

// Remove banana and strawberry
const bananaIdx = fruits.indexOf("banana");
if (bananaIdx !== -1) {
  fruits.splice(bananaIdx, 1); // remove banana
}
const strawberryIdx = fruits.indexOf("strawberry");
if (strawberryIdx !== -1) {
  fruits.splice(strawberryIdx, 1); // remove strawberry
}
console.log(fruits);

// Create exoticFruits and concatenate
const exoticFruits = ["dragonfruit", "rambutan", "durian"];
const allFruits = fruits.concat(exoticFruits);

// Print last two exotic fruits without altering array
console.log(allFruits.slice(-2));

// Sort Monalissa's items alphabetically
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"];
console.log(monalissaIsMessy.sort());

// Reverse Kevin's words
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"];
console.log(mirrorMirrorOnTheWall.reverse().join(" "));

// ===== HIGHER ORDER METHODS =====

// Remove "badword" using filter(), return a string
const RafaelNoBadWords =
  "I am so tired of this badword food. I do not want this badword badword food.";
const cleaned = RafaelNoBadWords.split(" ")
  .filter((w) => w.toLowerCase() !== "badword")
  .join(" ");
console.log(cleaned);

// Use reduce() to find total
const numbersToAddUp = [99, 5677, 232, 84, 2, 231];
const sum = numbersToAddUp.reduce((acc, n) => acc + n, 0);
console.log(sum);

// ===== SPREAD OPERATOR =====

// Copy an array
const copyOfLana = [...lana];
console.log(copyOfLana);

// Connect two arrays
const a1 = [1, 2, 3];
const a2 = ["a", "b"];
let connected = [...a1, ...a2];
console.log(connected);

// Add something at the end
connected = [...connected, "END"];
console.log(connected);

// Add something at the beginning
connected = ["START", ...connected];
console.log(connected);

// ===== ACCESS =====
const donutShop = [
  ["firecracker", "chocolate", "blueberry"],
  [
    ["orange", "applecrumble"],
    ["cream", "peanutbutter", "coconut"],
  ],
  [[[[[["flavor of the week"]], ["ihatethis"]]]]],
];

// Anthony wants applecrumble
console.log(donutShop[1][0][1]);

// Tosi wants ihatethis
console.log(donutShop[2][0][0][0][1][0]);

// =================================================
//                     IF/ELSE
// =================================================
const Teo = {
  type: "person",
  gender: "male",
  hunger: "hungry",
};

if (Teo.type === "person") {
  console.log("Teo is a person!");
  if (Teo.gender === "male") {
    console.log("You got it right!");
    if (Teo.hunger === "hungry") {
      console.log("Let's buy Teo some tacos!");
    } else if (Teo.hunger === "not hungry") {
      console.log("He doesn't need to eat.");
    } else {
      console.log("If Teo is not hungry, am I hungry?");
    }
  } else {
    console.log("Wrong. Teo is going to remove you from the class.");
  }
} else {
  console.log("Teo is not a person!");
}

// Ternary for Gustavo
const gustavoIsCoolest = true;
console.log(
  gustavoIsCoolest
    ? "You got that right!"
    : "James wants to argue. He says he's the best!"
);

// =================================================
//                     FUNCTIONS
// =================================================

// sayGreeting
function sayGreeting() {
  console.log("Hello, ma'amsir!");
}
sayGreeting();

// Takes a string parameter
function showMy(str) {
  console.log(`This is my ${str}`);
}
showMy("string");

// add() three numbers
function add(x, y, z) {
  console.log(x + y + z);
}
const n1 = 3,
  n2 = 7,
  n3 = 10;
add(n1, n2, n3);

// fightClub()
function fightClub(name) {
  if (name === "Teo") return "1st rule: You do not talk about Fight Club.";
  if (name === "Manara") return "2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.";
  if (name === "Liv")
    return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.';
  if (name === "Devin") return "4th rule: Only two guys to a fight.";
  return "No shirts";
}
console.log(fightClub("Teo"));
console.log(fightClub("Liv"));
console.log(fightClub("Someone"));

// hello() returns anonymous function
function hello() {
  console.log("Hello");
  return function () {
    console.log("Goodbye");
  };
}
const bye = hello();
bye();

// Function expression with first name
const Dewan = function () {
  console.log("Dewan Mahmud");
};
Dewan();

// Arrow function double
const double = (num) => num * 2;
console.log(double(21));

// =================================================
//                     OBJECTS
// =================================================

// human object
const human = {
  name: "Alex",
  age: 28,
  location: "Atlanta",
};

// Access name using dot
console.log(human.name);

// Access age using square brackets
console.log(human["age"]);

// Destructure location
const { location } = human;
console.log(location);

// ACCESS Granted
const bulbasaur = {
  name: "Bulbasaur",
  abilities: [{ ability: "overgrow" }, { ability: "chlorophyll" }],
  moves: ["razor-wind", "swords-dance", "cut"],
  sound: function () {
    console.log("Bulbahhhh!!!!!");
  },
};

// Print overgrow
console.log(bulbasaur.abilities[0].ability);

// Print cut
console.log(bulbasaur.moves[2]);

// Print Bulbahhhh!!!!!
bulbasaur.sound();

// Add height = 7
bulbasaur.height = 7;

// Add order = 1 via brackets
bulbasaur["order"] = 1;

// Print array of property names
console.log(Object.keys(bulbasaur));

// Print every property one by one
Object.keys(bulbasaur).forEach((k) => console.log(k, "=>", bulbasaur[k]));

// Print array of values
console.log(Object.values(bulbasaur));
