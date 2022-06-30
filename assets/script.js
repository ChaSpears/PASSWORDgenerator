// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordlength = parseInt(prompt("Enter Password Length(8-126)?"))
  if (passwordlength < 8 || passwordlength > 126 || isNaN(passwordlength)) {
    return "Invalid Length entered Please enter valid Ineteger between 8 to 126"
  }
  var upperCasecharacters = confirm("Would you like to have uppercase characters in your password?")
  var lowerCasecharacters = confirm("Would you like to have lowercase characters in your password?")
  var numbercharacters = confirm("Would you like to have number characters in your password?")
  var symbolscharacters = confirm("Would you like to have symbols characters in your password?")

  if (!upperCasecharacters && !lowerCasecharacters && !numbercharacters && !symbolscharacters) {
    return "Choose within suggested options."
  }

  var password = ""
  var inventoryLetters = []
  if(upperCasecharacters){
    inventoryLetters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(lowerCasecharacters){
    inventoryLetters += "abcdefghijklmnopqrstuvwxyz"
  }
  if(numbercharacters){
    inventoryLetters += "0123456789"
  }
  if(symbolscharacters){
    inventoryLetters += "!@#$%^&*()_+"
  }

  for(let  i=1;i<=passwordlength;i++){
    var index = Math.floor(Math.random()*inventoryLetters.length)
    password +=inventoryLetters[index]
  }
  console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
