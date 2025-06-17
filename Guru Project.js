function signIn() {
    var inputElement = document.getElementById("inputElement");
    var signInText = document.getElementById("signInText");

    var inputValue = inputElement.value;

    if (inputValue === "") {
        signInText.textContent = "Please enter your name.";
    } else {
        signInText.textContent = "Hi " + inputValue + ", Your Account is Verifying...";
    }
}