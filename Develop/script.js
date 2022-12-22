var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*'];
var lowerCaseArr = ['a','s','d','f','g','h','j','k','l','y','q','w','e','r'];
var upperCaseArr = ['Z','X','C','V','B','N','M','I','O','P','L','E','T','W','Q','D','S','A'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");
    
    if (correctPrompts){
      var newPassword = generatePassword();
      

     passwordText.value = newPassword;
    } else{
      passwordText.value = "";
    }
}



function generatePassword(){
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];

  }
  return password;
 
}

function getPrompts(){
   choiceArr = [];

  characterLength = parseInt(prompt("how many characters do you want your password to be? (8 - 15 characters")); //NaN
  
  if(isNaN(characterLength) . characterLength < 8 . characterLength > 15) {  // might cause problems 
     alert ("character length has to be a number, 8 - 15 digits. Please try again.");
     return false;

  }
  if (confirm ("would you like lowercase letters in your password?")){
      choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm ("would you like uppercase letters in your password?")){
  choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm ("would you like special characters in your password?")){
  choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm ("would you like numbers in your password?")){
    choiceArr = choiceArr.concat(numberArr);
  }
  return true; 
}

