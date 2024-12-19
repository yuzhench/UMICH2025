function checkPassword() {
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    const username = usernameField.value;
    const password = passwordField.value;

    // Define your correct credentials here
    const correctUsername = "yuzhench";
    const correctPassword = "cyz030518";

    if (username === correctUsername && password === correctPassword) {
        // Navigate to skelloton.html if the credentials are correct
        window.location.href = "skeleton.html";
        return false; // Prevents the form submission since we're redirecting
    } else {
        // Show error message if credentials are incorrect
        errorMessage.textContent = "Invalid username or password.";
        return false; // Prevent form submission and stay on the same page
    }
}