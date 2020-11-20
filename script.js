

// Assignment Code

"use strict;";


let generateBtn = document.querySelector("#generate");
let errorMsg = document.querySelector("#error");
let passwordInput = document.querySelector("#password")


let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];

let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];

let specialChar = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "-", "+", "=", "_", "~", "`"];

let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];


//function
function writePassword() {

    //reset before questions ..

    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    let charCount = parseInt(prompt("Please choose password character a length at least 8 but less than 128"));

    if (charCount < 7 || charCount > 127) {
        alert("Password character should be in 8 - 128 characters..Please enter vailid number")
        errorMsg.innerHTML = "Password character should be in 8 - 128 characters..Please enter vailid number";
        errorMsg.setAttribute("class", "");
    }

    else if (charCount >= 8 && charCount <= 128) {
        reset();
        let finalChar = []
        // WHEN prompted for character types to include in the password
        // THEN I choose lowercase, uppercase, numeric, and/or special characters
        let includeLowerCase = prompt("what is your mothers' maiden name? Please answer  MUST include 'lowercase letter' ");

        let includeUpperCase = prompt("What is the name of your pet?  Please answer MUST include 'uppercase letter' ");

        let includeSpecial = prompt("please enter special charater");

        let includeNumber = prompt("please enter numbers");

        if (includeLowerCase) {
            finalChar.push(includeLowerCase);
            console.log(finalChar);
        }

        if (includeUpperCase) {
            finalChar.push(includeUpperCase);
        }

        if (includeSpecial) {
            finalChar.push(includeSpecial);
        }


        if (includeNumber) {
            finalChar.push(includeNumber);
        }

        console.log(finalChar);
        var password = finalChar.join("")

        passwordInput.value = "Your Password has been set Up \n" + password

    }


}

function reset() {

    errorMsg.setAttribute("class", "hide");
    passwordInput.value = "";
}


generateBtn.addEventListener("click", writePassword);

