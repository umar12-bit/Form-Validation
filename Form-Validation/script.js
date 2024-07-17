function validateForm() {
    var fullName = document.getElementById("fullName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var fullNameError = document.getElementById("fullNameError");
    var emailError = document.getElementById("emailError");
    var phoneNumberError = document.getElementById("phoneNumberError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    // Reset previous errors
    fullNameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneNumberError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    var isValid = true;

    // Validate Full Name
    if (fullName.length < 5) {
        fullNameError.innerHTML = "Name must be at least 5 characters long";
        isValid = false;
    }

    // Validate Email ID
    if (!email.includes("@")) {
        emailError.innerHTML = "Enter a valid email address";
        isValid = false;
    }

    // Validate Phone Number
    if (phoneNumber.length !== 10 || phoneNumber === "1234567890" || isNaN(phoneNumber)) {
        phoneNumberError.innerHTML = "Enter a valid 10-digit phone number";
        isValid = false;
    }

    // Validate Password
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
        passwordError.innerHTML = "Password must be at least 8 characters long and not 'password' or your name";
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = "Passwords do not match";
        isValid = false;
    }

    // If form is valid, submit it and redirect
    if (isValid) {
        // Redirect to thanks page
        window.location.href = "submit.html";
        return false; // Prevent default form submission
    } else {
        // Prevent form submission
        return false;
    }
}
