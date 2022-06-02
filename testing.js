const registerContainer = document.getElementById("registerContainer");
const signupContainer = document.getElementById("signup-container");

registerbtn.addEventListener("click", registerUser)

function registerUser() {
  moveback()
  signupContainer.classList.toggle("moveside")
  registerContainer.classList.add("registering")
  console.log("it worked!")
}

function moveback() {
  if (registerContainer.classList.contains("registering")) {
    signupContainer.classList.toggle('moveback')
  }
}