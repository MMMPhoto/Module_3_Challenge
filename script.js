// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

// Prompt user for desired length of password
  var passwordLength = prompt("Hello. Please select a character length for your password. Password must be between 8 and 128 characters in length.");

  // Check to make sure user entered a number
  while (isNaN(passwordLength)) {
    passwordLength = prompt("Please try again. Password must be a number between 8 and 128.");
  }

  // Check to make sure password length is between 8 and 128 characters
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please try again. Password must be between 8 and 128.");
  }
// Ask user if they want to use lower case characters
  var lowerCase = confirm("Would you like to use lower case characters in your password? Click OK for Yes, Cancel for No.");

  // Ask user if they want to use lower case characters
  var upperCase = confirm("Would you like to use upper case characters in your password? Click OK for Yes, Cancel for No.");

// Ask user if they want to use lower case characters
  var wantNumbers = confirm("Would you like to use numbers in your password? Click OK for Yes, Cancel for No.");

// Ask user if they want to use lower case characters
  var wantSpecial = confirm("Would you like to use special characters in your password? Click OK for Yes, Cancel for No.");
  
  




  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
