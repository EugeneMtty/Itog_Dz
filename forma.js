const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

confirmPassword.addEventListener("input", function() {
  if (password.value !== confirmPassword.value) {
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
  } else {
    password.style.border = "1px solid green";
    confirmPassword.style.border = "1px solid green";
  }
});