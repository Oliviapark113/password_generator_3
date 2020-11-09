

// Assignment Code
"use strict;";

let generateBtn = document.querySelector("#generate");
let errorMsg = document.querySelector("#error");
let passwordInput = document.querySelector("#password")

let passwordText =
    "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz'!@#$%^&*=-_' 0123456789";

let questions = {
    q1: () => prompt("what is your mothers' maiden name?"),
    q2: () => prompt("What is the name of your pet?"),
    q3: () => prompt("What city were you born ?"),
    q4: () => confirm("Please add uppercase , lowercase and numbers and symbols"),
    q5: () => prompt("Please choose password character a length at least 8 but less than 128")
}


// Fuctions 

function writePassword() {
    //reset before ask questions 
    reset();
    let answer1 = questions.q1();
    if (answer1 === "" || answer1 == "null") {
        alert("Please enter valid password!")
    }
    else {
        let answer2 = questions.q2();
        if (answer2 === "" || answer2 == "null") {
            alert("Please enter valid password!")

        }
        else {
            let answer3 = questions.q3();
            if (answer3 === "" || answer3 == "null") {
                alert("Please enter valid password!")
            }
            else {
                let answer4 = questions.q4();
                if (answer4) {
                    var answer5 = prompt("Please choose password character a length at least 8 but less than 128")

                }
            }
        }
    }

    if (answer5.length <= 7 || answer5.length >= 129) {
        alert(answer5 + " is not a character between 8 - 128. Try Again!")
        errorMsg.textContent = "Please enter valid code";
       
    }
    else {

        alert("Your Password is " + answer5 + "!");
        let passwordInput = document.querySelector("#password");
        passwordInput.innerHTML = "Your Password is " + answer5 + "!";

    }

}


function reset() {
    errorMsg.textContent = "";
    passwordInput.textContent = "";
}


// Add eventlistener to generate button//
generateBtn.addEventListener("click", writePassword);

