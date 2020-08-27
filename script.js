// spacial characters
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// numeric characters
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// alphaberical lowercase characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// alphaberical uppercase characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// user confirm varibles
var user;
var conSpecial;
var conNumber;
var conLowercase;
var conUppercase;
var userChoices;

//function generate random password
function generator() {
  // start user input prompt
  user = prompt(
    "How many characters whould you like your password to contain? choose between 8 and 128"
  );

  if (user < 8 || user > 128) {
    user = prompt("You must choose between 8 and 128");
    if (user > 8 & user < 128) {
      // Continues once user input is validated
      conSpecial = confirm("Would you like to including special characters");
      conNumber = confirm("Would you like to including number characters");
      conLowercase = confirm("Would you like to including lowercase characters");
      conUppercase = confirm("Would you like to including uppercase characters");
    }
  } else {
    // Continues once user input is validated
    conSpecial = confirm("Would you like to including special characters");
    conNumber = confirm("Would you like to including number characters");
    conLowercase = confirm("Would you like to including lowercase characters");
    conUppercase = confirm("Would you like to including uppercase characters");
  }

  //if loop for all negative options 
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
var arr = []
var ps;
var generateBtn = document.getElementById("generateBtn")

generateBtn.addEventListener("click", function () {
  // Random selection for all variables: 
  document.getElementById("password").placeholder = ""
  generator();
  for (var i = 0; i < user; i++) {
    var pickChoices = userChoices[Math.floor(Math.random() * userChoices.length)]
    arr.push(pickChoices)
    ps = arr.join("")
  }
  document.getElementById("password").textContent = ps;
});


var copyBtn = document.getElementById("copyBtn")
copyBtn.addEventListener("click", function () {
  document.getElementById("password").select()
  document.execCommand("Copy")
  alert("Password copied to clipboard!")
})
