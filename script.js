// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {

  var length;
  while (true) {
      length = prompt("How many characters would you like this password to contain?");
      length = parseInt(length, 10); 
      if (length >= 8 && length <= 128) break;
      alert("Please enter a number between 8 and 128.");
  }
  var numbers = confirm("Would you like this to include any numbers?");
  var specialistCharacters = confirm("Would you like this to contain any special characters?");
  var uppercase = confirm("Would you like this to contain any uppercase characters?");
  var lowercase = confirm("Would you like this to contain any lowercase characters?");

  return {
      length: length,
      numbers: numbers,
      specialistCharacters: specialistCharacters,
      uppercase: uppercase,
      lowercase: lowercase
  };

}



// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// Function to generate password with user input
function generatePassword(userSelections) {

  var characters = []
  var newPassword = ''

  if (userSelections.numbers) {
    characters = characters.concat(numericCharacters);
  }

  if (userSelections.specialistCharacters) {
    characters = characters.concat(specialCharacters);
  }

  if (userSelections.uppercase) {
    characters = characters.concat(upperCasedCharacters);
  }

  if (userSelections.lowercase) {
    characters = characters.concat(lowerCasedCharacters);
  }

  for (var i = 0; i < userSelections.length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomIndex];
}

  
return newPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var userSelections = getPasswordOptions(); // Get user selections when the button is clicked
  var newPassword = generatePassword(userSelections); // Generate the password
  console.log("User Selections:", userSelections);
  console.log("Generated Password:", newPassword);

  var passwordText = document.querySelector('#password'); // Assuming you have an input field to display the password
    passwordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);





