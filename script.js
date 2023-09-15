const passwordInput = document.getElementById("password");
var icon = document.getElementById("toggle");

function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
  if (icon.getAttribute("name") === "eye-outline") {
    // Change the name attribute to the new icon name
    icon.setAttribute("name", "eye-off-outline");
  } else {
    // Change it back to the original icon name
    icon.setAttribute("name", "eye-outline");
  }
}
