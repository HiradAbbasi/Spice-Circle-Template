let firstNameCorrect = true;

//The next three variables are only used for empty inputs
let inputs = document.getElementsByTagName("input");
let labels = document.getElementsByTagName("label");
let emptyFields = false;

let errorDiv = document.getElementById("error");

let firstNameInput = document.getElementById("first-name");
let lastNameInput = document.getElementById("last-name");
let telephoneInput = document.getElementById("telephone");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let acceptedCookies = confirm("Do You Accept Our Use of Cookies? Click OK for Yes and Cancel for No");

for (let i = 0; i < inputs.length - 2; i++) {
    inputs[i].addEventListener("focusin", function() {
        this.style.backgroundColor = "orange";
    });

    inputs[i].addEventListener("focusout", function() {
        this.style.backgroundColor = "white";
    });
}

//Checks for empty fields every 5 seconds
setInterval(checkEmptyFields, 5000);

function signUp() {
    //This is an addition of confirming the user's password
    let reenterPasswordInput = document.getElementById("confirm");

    let lastNameCorrect;
    let telephoneCorrect;
    let emailCorrect;
    let lengthCheckPassed;
    let capitalCheckPassed;
    let numberCheckPassed;
    let symbolCheckPassed;

    let signUpPassed = true;

    //This ensures that the password field has what the user wants in it because Sign Up has been pressed
    passwordInputValue = passwordInput.value;

    //I want to clear the error div of any previous messages
    errorDiv.innerHTML = "";

    //Testing for empty fields
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].value == "") {
            //This only gets executed the first time the loop runs into an empty field
            if (!emptyFields) {
                error.innerHTML += "<p>All fields are required!</p>\n<p>You must fill in the following fields:\n<ul>\n";

                emptyFields = true;
            }

            //This displays the label for the input minus the last character, which is the colon :
            error.innerHTML += "<li>" + labels[i].innerHTML.substring(0, labels[i].innerHTML.length - 1) + "</li>\n";
        }
    }

    if (emptyFields) {
        //Closes off the unordered list and paragraph tags that are started in the loop if empty fields are found
        error.innerHTML += "</ul>\n</p>";
        signUpPassed = false;
    } else {
        firstNameCorrect = checkFirstName();

        if (!firstNameCorrect) {
            errorDiv.innerHTML += "<p>Your first name cannot contain a number</p>";
            signUpPassed = false;
        }

        lastNameCorrect = checkLastName();

        if (!lastNameCorrect) {
            errorDiv.innerHTML += "<p>Your last name cannot contain a number</p>";
            signUpPassed = false;
        }

        telephoneCorrect = checkTelephone();

        if (!telephoneCorrect) {
            errorDiv.innerHTML += "<p>Your telephone number is not in the proper format</p>";
            signUpPassed = false;
        }

        emailCorrect = checkEmail();

        if (!emailCorrect) {
            errorDiv.innerHTML += "<p>Your e-mail is not in the proper format</p>";
            signUpPassed = false;
        }

        lengthCheckPassed = checkPasswordLength();

        if (!lengthCheckPassed) {
            errorDiv.innerHTML += "<p>Your password does not contain at least 10 characters</p>";
            signUpPassed = false;
        }

        capitalCheckPassed = checkPasswordCapital();

        if (!capitalCheckPassed) {
            errorDiv.innerHTML += "<p>Your password does not contain a capital letter</p>";
            signUpPassed = false;
        }

        numberCheckPassed = checkPasswordNumber();

        if (!numberCheckPassed) {
            errorDiv.innerHTML += "<p>Your password does not contain a number</p>";
            signUpPassed = false;
        }

        symbolCheckPassed = checkPasswordSymbol();

        if (!symbolCheckPassed) {
            errorDiv.innerHTML += "<p>Your password does not contain a symbol</p>";
            signUpPassed = false;
        }

        if (passwordInput.value != reenterPasswordInput.value) {
            errorDiv.innerHTML += "<p>Your passwords do not match</p>";
            signUpPassed = false;
        }
    }

    console.log(signUpPassed);

    if (signUpPassed) {
        error.innerHTML += "<p>Sending....</p>";
        error.innerHTML += "<p>Check your email for confirmation</p>";

        setInterval(checkEmptyFields, 10000);
    } else {
        getElementsById("FirstName").style.backgroundColor = "orange";

    }
}

function checkEmptyFields() {
    errorDiv.innerHTML = "";
    emptyFields = false;

    //Testing for empty fields
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].value == "") {
            //This only gets executed the first time the loop runs into an empty field
            if (!emptyFields) {
                error.innerHTML += "<p>All fields are required!</p>\n<p>You must fill in the following fields:\n<ul>\n";

                emptyFields = true;
            }

            //This displays the label for the input minus the last character, which is the colon :
            error.innerHTML += "<li>" + labels[i].innerHTML.substring(0, labels[i].innerHTML.length - 1) + "</li>\n";
        }
    }

    if (emptyFields) {
        //Closes off the unordered list and paragraph tags that are started in the loop if empty fields are found
        error.innerHTML += "</ul>\n</p>";
    }
}

function checkFirstName() {
    let namePattern = /\d/g;

    return !namePattern.test(firstNameInput.value);
}

function checkLastName() {
    let namePattern = /\d/g;

    return !namePattern.test(lastNameInput.value);
}

function checkTelephone() {
    let telephonePattern = /^\(\d\d\d\)-\d\d\d-\d\d\d\d$/g;

    return telephonePattern.test(telephoneInput.value);
}

function checkEmail() {
    let emailPattern = /@/g;

    return emailPattern.test(emailInput.value);
}

function checkPasswordLength() {
    let lengthPattern = /[\w\W]{10}/g;

    return lengthPattern.test(passwordInput.value);
}

function checkPasswordCapital() {
    let capitalPattern = /[A-Z]/g;

    return capitalPattern.test(passwordInput.value);
}

function checkPasswordNumber() {
    let numberPattern = /\d/g;

    return numberPattern.test(passwordInput.value);
}

function checkPasswordSymbol() {
    let symbolPattern = /\W/g;

    return symbolPattern.test(passwordInput.value);
}