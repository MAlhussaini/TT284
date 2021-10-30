function home_redirect() {
    location.replace("./home.html");
}


const details = document.querySelectorAll('.link')
const pwd1 = document.getElementById("pwd");
const pwd2 = document.getElementById("password");
const capital = document.getElementById("capital");
const letter = document.getElementById("letter");
const length = document.getElementById("length");
const number = document.getElementById("number");

details.forEach(function(currentItem) {
    console.log(currentItem.classList)
    console.log(currentItem.parentElement.lastElementChild.classList)
    currentItem.addEventListener('click', toggle_detail)
})

function toggle_detail(event) {
    event.currentTarget.parentElement.lastElementChild.classList.toggle("hidden");
}

function email_validation() {
    validation_msg = document.getElementById('error-msg')
    email = document.getElementById('email').value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
        validation_msg.style.display = "none";
    } else {
        validation_msg.style.display = "inline-block";
    }
}

function password_validation() {
    validation_msg = document.getElementById('error-msg2')
    if (pwd1.value == pwd2.value) {
        validation_msg.style.display = "none";
    } else {
        validation_msg.style.display = "inline-block";
    }
}


function pwd1_onfocus() {
    // When the user clicks on the password field, show the message box
    document.getElementById("message").style.display = "block";
}

function pwd1_onblur() {
    // When the user clicks outside of the password field, hide the message box
    document.getElementById("message").style.display = "none";
}

function pwd1_onkeyup() {
    // When the user starts to type something inside the password field
    const lowerCaseLetters = /[a-z]/g;
    // Validate lowercase letters
    if (pwd1.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if (pwd1.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    const numbers = /[0-9]/g;
    if (pwd1.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (pwd1.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

function form_validation(event) {
    if (pwd1.value == pwd2.value) {
        return true;
    } else {
        alert("Please make sure to fill the registration form carefully.");
        event.preventDefault();
        returnToPreviousPage();
        return false;
    }
}