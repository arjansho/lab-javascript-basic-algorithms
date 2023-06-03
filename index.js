// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops


// Iteration 1: Names and Input
console.log(`---Iteration 1: Names and Input---`)
// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Arjan";


// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);


// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Fjoralba";


// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
console.log(`\n---Iteration 2: Conditionals---`)
/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}


// Iteration 3: Loops
console.log(`\n---Iteration 3: Loops---`)
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

let capsSeparated = "";
for (let i = 0; i < hacker1.length; i++) {
  capsSeparated += hacker1[i].toUpperCase() + " ";
}
console.log(capsSeparated);

//without loop
//console.log(hacker1.toUpperCase().split("").join(" "));


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseNav = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseNav += hacker2[i];
}
console.log(reverseNav);


/*3.3 Depending on the lexicographic (alphabetical) order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/
// console.log(hacker1.localeCompare(hacker2));

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}



console.log(`\n\n*******Bonus Time!******* \n\n---Bonus 1:---`)

//Generate 3 paragraphs. Store the text in a variable type of string.

let loremParagraphs = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard  et dummy text ever since the 1500s, when an unknown printer took et a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into et electronic typesetting, remaining essentially unchanged.`;

//Make your program count the number of words in the string.
let wordCount = 1;
for (let i = 0; i < loremParagraphs.length; i++) {
  if (loremParagraphs[i] === " ") {
    wordCount++;
  }
}

console.log(`Wordcount with a loop ${wordCount}`);

//without loop and with less code
console.log(`Wordcount without a loop ${loremParagraphs.split(" ").length}`);

// Make your program count the number of times the Latin word et appears.

(searchFor = " et "), (etCount = 0), (pos = loremParagraphs.indexOf(searchFor));

while (pos > -1) {
  ++etCount;
  pos = loremParagraphs.indexOf(searchFor, ++pos);
}
console.log(`There are ${etCount} instances of the word 'et'`);


//another option of counting the et word.
let etCount2 = loremParagraphs.split(" et ").length - 1;
console.log(`This is the 3rd way.  "et" is used ${etCount2} times`);



console.log(`\n---Bonus 2:---`)
/*Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/

let phraseToCheck = "Was it a car or a cat I saw?";
let newStr = "";
let noPuncForward = "";
let noPuncReverse = "";

for (i = 0; i < phraseToCheck.length; i++) {
  switch (phraseToCheck[i]) {
    case " ":
    case "?":
    case ",":
    case "'":
    case "!":
      newStr += "";
      break;
    default:
      newStr += phraseToCheck[i];
  }
}

noPuncForward = newStr.toLowerCase();
console.log(`Forward ${noPuncForward}`);
for (let i = noPuncForward.length - 1; i >= 0; i--) {
  noPuncReverse += noPuncForward[i];
}
console.log(`Reverse ${noPuncReverse}`);

if (noPuncReverse === noPuncForward) {
  console.log(`The phrase "${phraseToCheck}" is a super cool palindrome!`);
} else {
  console.log(`Palindromes are hard. :( Try again. `);
}

//Option Using join, reverse, for and if-else statements

let phraseToCheck1 = "Nerd Arjan";
let forward;
let reverse;

forward = phraseToCheck1.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
console.log(`\nThis is the phrase forward "${forward}""`);

reverse = forward.split("").reverse().join("")
console.log(`This is the phrase backwards "${reverse}""`);

if (reverse === forward) {
  console.log(`The phrase "${phraseToCheck1}" is a super cool palindrome!`)
} else {
  console.log(`Palindromes are hard. :( Try again. `)
}