// Assignment Code
var generateBtn = document.querySelector("#generate");

//character set to pick from
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numberChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
];

//PSEUDOCODE MAPPING OUTLINE:
//1. When button is clicked then prompts password criteria
//2. When prompted for password criteria then select criteria for password
//3. When prompted for a length of password, then choose between 8-128 characters
//4. When prompted for character type in password, then choose lowercase, uppercase, numeric, and/or special characters
//5. When I answer each prompt, then input should be validated with at least one character type selected
//6. When all prompts are answered, then password is generated that matches the criteria
//7. When password is generated, then either displayed as alert or written on the page

//1.Build up a password (string) that is x characters long (passwordlength)
//Start with empty password
//add random character
//repeat until password is password_length long
//use a variable to hold password ""
//for-loop

// Write password to the #password input

function generatePassword() {
  var passwordLength = prompt(
    "Please choose the number of characters you would like between 8 and 128."
  );

  var lowerCaseLength = prompt(
    "How many lowercase characters would you like to have?"
  );

  var upperCaseLength = prompt(
    "How many uppercase characters would you like to have?"
  );

  for (let i = 0; i < passwordLength.length; i++) {
    //get the character set
    var characterSet = [
      "lowerCase",
      "upperCase",
      "numberChoice",
      "specialCharacters"];

        var randomIndex = Math.floor(Math.random() * character_set.length); {
      password += characterSet[randomIndex];
    }
    console.log("Final password: " + password);
  }

var password =
  //do they want lowercase? if true pull a random letter from the lowerCase array

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword){
  generatePassword();
}

// Function that will have the randomly generated password written on the page
function displayPassword() {}