const registerContainer = document.getElementById("registerContainer");
const signupContainer = document.getElementById("signup-container");
const signupWording = document.getElementById("noMember")
const signInText = document.getElementById("signBackIn")
const test = document.getElementById("test")

registerbtn.addEventListener("click", registerUser)

function registerUser() {
  moveback()
  signupContainer.classList.toggle("moveside")
  registerContainer.classList.add("registering")
  signInText.classList.toggle('hide')
  signupWording.classList.toggle('hide')

}


function moveback() {
  if (registerContainer.classList.contains("registering")) {
    signupContainer.classList.toggle('moveback')
  }
}

