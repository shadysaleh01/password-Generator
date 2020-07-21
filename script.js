var special = [
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
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercase = [
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
var uppercase = [
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

// var conSpecial;
// var conNumber;
// var conLowercase;
// var conUppercase;

//generate random password
function generator() {
  var user = prompt(
    "How many characters whould you like your password to contain? choose between 8 and 128"
  );

  if (user < 8 || user > 128) {
    user = prompt("You must choose between 8 and 128");
  } else {
    var conSpecial = confirm("Would you like to including special characters");
    var conNumber = confirm("Would you like to including number characters");
    var conLowercase = confirm(
      "Would you like to including lowercase characters"
    );
    var conUppercase = confirm(
      "Would you like to including uppercase characters"
    );
  }

  var userChoices;

  if (conSpecial) {
    userChoices = special;
  }
  if (conNumber) {
    userChoices = number;
  }
  if (conLowercase) {
    userChoices = lowercase;
  }
  if (conUppercase) {
    userChoices = uppercase;
  }
  if (conSpecial && conNumber) {
    userChoices = special.concat(number);
  }
  if (conSpecial && conLowercase) {
    userChoices = special.concat(lowercase);
  }
  if (conSpecial && conUppercase) {
    userChoices = special.concat(uppercase);
  }
  if (conNumber && conLowercase) {
    userChoices = number.concat(lowercase);
  }
  if (conNumber && conUppercase) {
    userChoices = number.concat(uppercase);
  }
  if (conLowercase && conUppercase) {
    userChoices = lowercase.concat(uppercase);
  }
  if (conSpecial && conNumber && conLowercase) {
    userChoices = special.concat(number, lowercase);
  }
  if (conSpecial && conLowercase && conUppercase) {
    userChoices = special.concat(lowercase, uppercase);
  }
  if (conSpecial && conNumber && conUppercase) {
    userChoices = special.concat(number, uppercase);
  }
  if (conNumber && lowercase && uppercase) {
    userChoices = number.concat(lowercase, uppercase);
  }
  if (conSpecial && conNumber && conLowercase && conUppercase) {
    userChoices = special.concat(number, lowercase, uppercase);
  }
}

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  generator();
  document.getElementById("password").textContent = userChoices;
});

// generator();
