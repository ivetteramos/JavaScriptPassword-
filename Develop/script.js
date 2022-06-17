// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var LC = "abcdefghijklmnopqrstuvwxyz"
  var UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric ="1234567890"
  var special = "!@#$%^&*()"
  var potential = ""
  var password = ""
  var passwordLength = prompt("How many characters do you want your password to be? Must be between 8-128 characters.")
 
 passwordLength=parseInt(passwordLength)

 if (typeof(passwordLength)!=="number") {
  alert ("Password needs to be a number")
  return
 }
 if (passwordLength < 8 || passwordLength > 128) {
  alert ("Password does not meet Character length Requirements")
  return
 }
 
 var passwordLC = confirm("Do you want to include lower case letters?")
 var passwordUC = confirm("Do you want to include Uppercase?")
 var numericValue = confirm("Do you want to include numeric values?")
 var specialcharacters = confirm("Do you want to include special characters?")


 if (!passwordLC && !passwordUC && !numericValue && !specialcharacters) {
  alert("Must have at least one character type to meet password requirements")
  return
}

 if (passwordLC) {
  potential+=LC
   }
  if (passwordUC){
    potential+=UC
   }
   if (numericValue){
    potential+=numeric
   } 
   if (specialcharacters) {
    potential+=special
   }

   for (let i = 0; i < passwordLength; i++) {
    
    var indexChar = Math.floor(Math.random() * potential.length)
     var selectedChar = potential[indexChar]
     password+=selectedChar
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
