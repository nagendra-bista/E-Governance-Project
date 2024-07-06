let signupbtn=document.getElementById("signupbtn");
    let signinbtn=document.getElementById("signinbtn");
    let nameField=document.getElementById("nameField");
    let title=document.getElementById("title");

    signinbtn.onclick=function(){
        nameField.style.maxHeight="0"
        title.innerHTML="Sign In"
        signupbtn.classList.add("disable");
        signinbtn.classList.remove("disable");
        
    }
    signupbtn.onclick=function(){
        nameField.style.maxHeight="65px"
        title.innerHTML="Sign Up"
        signupbtn.classList.remove("disable");
        signinbtn.classList.add("disable");
    }
   


// login.js

document.getElementById("signupbtn").addEventListener("click", function() {
    validateForm("signup");
});

document.getElementById("signinbtn").addEventListener("click", function() {
    validateForm("signin");
});

function validateForm(type) {
    // Get form fields
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get error display element
    const errorElement = document.getElementById("error");
    errorElement.innerHTML = "";

    let valid = true;
    let errorMessage = "";

    // Validate username for Sign Up
    if (type === "signup" && username === "") {
        errorMessage += "Username is required.<br>";
        valid = false;
    }

    // Validate email
    if (email === "") {
        errorMessage += "Email is required.<br>";
        valid = false;
    } else if (!validateEmail(email)) {
        errorMessage += "Please enter a valid email address.<br>";
        valid = false;
    }

    // Validate password
    if (password === "") {
        errorMessage += "Password is required.<br>";
        valid = false;
    }

    // Display error messages if validation fails
    if (!valid) {
        errorElement.innerHTML = errorMessage;
        errorElement.style.color = "red";
    } else {
        // If validation passes, submit the form or do something else
        errorElement.innerHTML = `Form ${type === "signup" ? "submitted" : "signed in"} successfully!`;
        errorElement.style.color = "green";
    }
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}








// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the login button and the close button
    const loginButton = document.querySelector('.menu button.active a');
    const closeButton = document.querySelector('.icon-close i');
    const formBox = document.querySelector('.form-box');

    // Add a click event listener to the login button
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        formBox.classList.add('active-popup');
    });

    // Add a click event listener to the close button
    closeButton.addEventListener('click', function () {
        formBox.classList.remove('active-popup');
    });
});
