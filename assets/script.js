// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordlength = parseInt(prompt("Enter Password Length(8-126)?"))
  if(passwordlength < 8 || passwordlength > 126 || isNaN(passwordlength)){
    return "Invalid Length entered Please enter valid Ineteger between 8 to 126"
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
