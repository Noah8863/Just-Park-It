const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log(name, email, password);
  if (name && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
      // console.log('success');
    });
    console.log("success");
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

const registerContainer = document.getElementById("registerContainer");
const signupContainer = document.getElementById("signup-container");
const signupWording = document.getElementById("noMember");
const signInText = document.getElementById("signBackIn");
const test = document.getElementById("test");
const backtoLogin = document.getElementById("backtologin");
const registerButton = document.getElementById("registerbtn");

registerbtn.addEventListener("click", registerUser);

function registerUser() {
  moveback();
  signupContainer.classList.toggle("moveside");
  registerContainer.classList.add("registering");
  signInText.classList.toggle("hide");
  signupWording.classList.toggle("hide");
  backtoLogin.classList.toggle("hide");
  registerButton.classList.add("hide");
}

function moveback() {
  if (registerContainer.classList.contains("registering")) {
    signupContainer.classList.toggle("moveback");
  }

  if (registerButton.innerText === "Register Today") {
    registerButton.innerText = "Back to Login";
  } else {
    registerButton.innerText = "Register Today";
  }
}

registerbtn.addEventListener("click", registerUser);

function registerUser() {
  moveback();
  signupContainer.classList.toggle("moveside");
  registerContainer.classList.add("registering");
  signInText.classList.toggle("hide");
  signupWording.classList.toggle("hide");
}

function moveback() {
  if (registerContainer.classList.contains("registering")) {
    signupContainer.classList.toggle("moveback");
  }
}
