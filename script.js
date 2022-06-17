// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric = "1234567890"
  var special = "!@#$%^&*()"
  var potential = ""
  var password = ""
  var passwordLength = prompt("How many characters do you want your password to be? Must be between 8-128 characters.")

  passwordLength = parseInt(passwordLength)

  if (typeof (passwordLength) !== "number") {
    alert("Password needs to be a number")
    return
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password does not meet Character length Requirements")
    return
  }

  var passwordlowerCase = confirm("Do you want to include lower case letters?")
  var passwordupperCase = confirm("Do you want to include upper case letters?")
  var numericValue = confirm("Do you want to include numeric values?")
  var specialcharacters = confirm("Do you want to include special characters?")

  if (!passwordlowerCase && !passwordupperCase && !numericValue && !specialcharacters) {
    alert("Must have at least one character type to meet password requirements")
    return
  }

  if (passwordlowerCase) {
    potential += lowerCase
  }
  if (passwordupperCase) {
    potential += upperCase
  }
  if (numericValue) {
    potential += numeric
  }
  if (specialcharacters) {
    potential += special
  }

  for (let i = 0; i < passwordLength; i++) {
    var indexChar = Math.floor(Math.random() * potential.length)
    var selectedChar = potential[indexChar]
    password += selectedChar
  }
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
