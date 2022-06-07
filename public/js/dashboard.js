document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
    document.body.classList.remove('fade');
  }, 230);
});
document.body.classList.add('fade');


// document
//   .querySelector("#review-input")
//   .addEventListener("submit", reviewHandler);

const reviewHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#text-area").value.trim();

  if (description) {
    const response = await fetch("api/reviews", {
      method: "POST",
      body: JSON.stringify({ description }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  } else {
    console.log("something went wrong");
  }
};

const addComment = async (event) => {
  event.preventDefault();
};




//Code Block for the data collection area


const list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) =>
  item.addEventListener("click", activeLink))


var step1 = document.getElementById("step-1");
var step2 = document.getElementById("step-2");
var prev = document.getElementById('prev');
var step3 = document.getElementById("step-3");
// Default style step display: block
step1.style.display = "block";
// step2 display:  none 
// Preview back display none
step2.style.display = "none";
// Step 3 display: none 
step3.style.display = "none";

//Inptus 
var fname = document.getElementById("form-fname");
var lname = document.getElementById("form-lname");
var email = document.getElementById("form-email");
var company = document.getElementById("form-company-name");
var branch = document.getElementById("form-branch");
var product = document.getElementById("form-product");
var country = document.getElementById("form-country");
var city = document.getElementById("form-city");
var phone = document.getElementById('form-phone');

// Define form and prevent default submittion 
let form = document.getElementById("stepper-form").addEventListener("click", (e) => {
  // Prevent default submittion
  e.preventDefault();
  //On click we call functions next and prev 
  //  Next function (next button)
  next;
  //Preview or back (button)
  prev;
});

//Progress bar (The progress by default 25%, so when section is completed += 25% width and so on.)
var progressBar = document.getElementById("prgBar");
// Default color is orange (on 50% width color will change, 75% and 99 %)
progressBar.style.backgroundColor = "green";

//Next(Button) step function. (When this function is excute, we change the style for current sectino to none, the next section to be block) 
var next = document.getElementById("next");

//On click we change the style 
next.addEventListener("click", () => {

  //Check for step to be displayed 
  if (step1.style.display === "block" && step2.style.display === "none" && step3.style.display === "none") {
    //Check for displayed step
    step2.style.display = "block";
    //Set progress bar width
    progressBar.style.width = "50%";
    //Set progress bar color to blue
    progressBar.style.backgroundColor = "rgb(142, 210, 241";

    //Change the innerHTML text = 50%
    progressBar.innerHTML = "50%";

    //And set style to none
    step1.style.display = "none";
    //And style to none
    step3.style.display = "none";

    //Check for next (Section) to displayed
  } else if (step2.style.display === "block" && step3.style.display === "none" && step1.style.display === "none") {
    // Add style display none for step 2 (section)
    step2.style.display = "none";
    // Add style display: none 
    step1.style.display = "none";
    //And add style display: block
    step3.style.display = "block";
    //Set progress bar width
    progressBar.style.width = "98%";
    //Set progress bar color 
    progressBar.style.backgroundColor = "lightgreen";
    // Set progress bar innerHTML text to = 98%
    progressBar.innerHTML = "98%";

    // Confirm if all steps are completed and then check if inputs are empty
  } else if (step3.style.display === "block" && step2.style.display === "none" && step1.style.display === "none") {
    //Set progress bar width
    progressBar.style.width = "100%";
    //And change the progress bar color
    progressBar.style.backgroundColor = "green";
    // Change the progress innnerHTML = 100%
    progressBar.innerHTML = "100%";

    let x = document.getElementById("stepper-form");

    //Check input have data
    validData(fname, lname, email);
    validData(company, branch, product);
    validData(country, city, phone);

    //Change the innerHTML text = submit
    next.innerHTML = "Submit";

    // And confirm again if all inputs are not empty and then submit
    if (fname.value !== "" && lname.value !== "" && email.value !== "" && company.value !== "" && branch.value !== "" && product.value !== "" && country.value !== "" && city.value !== "" && phone.value !== "") {
      //form display none (Show the list of ipnuts)
      let stepperForm = document.getElementById("stepper-form").style.display = "none";
      let title = document.getElementById("main-section").innerHTML = 'Thank You For Submittion!';

      // Inputs display none 
      progressBar.style.display = "none";
      // Create a ul
      let ul = document.createElement('ul');
      ul.className = "list-group list-group-flush";
      // Create a list 
      let item1 = document.createElement('li');
      let item2 = document.createElement("li");
      let item3 = document.createElement("li");
      let item4 = document.createElement("li");
      let item5 = document.createElement("li");
      let item6 = document.createElement("li");
      let item7 = document.createElement("li");
      let item8 = document.createElement("li");
      let item9 = document.createElement("li");
      // Add class 
      item1.className = "list-group-item";
      item2.className = "list-group-item";
      item3.className = "list-group-item";
      item4.className = "list-group-item";
      item5.className = "list-group-item";
      item6.className = "list-group-item";
      item7.className = "list-group-item";
      item8.className = "list-group-item";
      item9.className = "list-group-item";
      //Append text 
      item1.textContent = `First: ${fname.value}`;
      item2.textContent = `Last name: ${lname.value}`;
      item3.textContent = `Email: ${email.value}`;
      item4.textContent = `Company: ${company.value}`;
      item5.textContent = `Branch: ${branch.value}`;
      item6.textContent = `Product: ${product.value}`;
      item7.textContent = `Country: ${country.value}`;
      item8.textContent = `City: ${city.value}`;
      item9.textContent = `Phone: ${phone.value}`;

      // Append
      ul.append(item1);
      ul.append(item2)
      ul.append(item3);
      ul.append(item4);
      ul.append(item5);
      ul.append(item6);
      ul.append(item7);
      ul.append(item8);
      ul.append(item9);
      document.getElementById("cardForm").append(ul);
      return false;
    } else {
      //Disable submit btn
      next.disabled = true;
      //Set progress bar width
      progressBar.style.backgroundColor = "red";
      progressBar.innerHTML = "No data found!";
    }
    return false;
  }
  return false;
});

// Back (preview function)
prev.addEventListener("click", () => {
  //Check for active step and add to it a style.display none
  if (step3.style.display === "block" && step2.style.display === "none" && step1.style.display === "none") {
    step1.style.display = "none";
    step2.style.display = "block";
    next.innerHTML = "Next";
    next.disabled = false;
    //Set progress bar width
    progressBar.style.backgroundColor = "lightgreen";
    //Set progress bar 
    progressBar.innerHTML = "50%";
    progressBar.style.width = "50%";
    step3.style.display = "none";
  } else if (step3.style.display === "none" && step2.style.display === "block" && step1.style.display === "none") {
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";
    //Set progress bar width
    progressBar.style.backgroundColor = "orange";
    //Set progress bar 
    progressBar.innerHTML = "25%";
    progressBar.style.width = "25%";
  }
});

/**
 * Function validation
 * this take 3 parameters 
 * and check if is empty 
 */
function validData(a, b, c) {
  // 
  if (a.value !== "" && b.value !== "" && c.value !== "") {
    //Add some code here
    next.disabled;
  } return true;
}