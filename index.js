/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...
const indexOfJ = string1.indexOf("j");
console.log(indexOfJ);

/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
let str1 = string2[2];
let str2 = string2[11];
let str3 = string2[10];
const newStr = (str1 += str2 += str2 += str3);
console.log(newStr);

/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";
let stringThree = string3.repeat(4);
console.log((stringThree += " Batman!"));

/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit =
  "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

let indeOfFavoriteFruit = fruit.indexOf("mango");
console.log(indeOfFavoriteFruit);
let favoriteFruit = fruit.slice(13, 18);
console.log(favoriteFruit);

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";

// Check the first headline
if (funnyHeadline1.includes("oxygen")) {
  console.log("The string includes the word 'oxygen'");
} else {
  console.log("The string does not include the word 'oxygen'");
}

// Check the second headline
if (funnyHeadline2.includes("oxygen")) {
  console.log("The string includes the word 'oxygen'");
} else {
  console.log("The string does not include the word 'oxygen'");
}

/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";

// a) Print the string length
let strLength = string4.length;
console.log(strLength);

// b) Print the last character in the string
let lastChar = strLength - 1;
console.log(string4[lastChar]);
