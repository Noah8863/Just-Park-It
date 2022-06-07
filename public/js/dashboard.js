document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
      document.body.classList.remove('fade');
  }, 230);
});
document.body.classList.add('fade');



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
document
  .querySelector("#review-input")
  .addEventListener("submit", reviewHandler);
//Code snippet for the navbar
const list = document.querySelectorAll('.list');
function activeLink (){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener("click", activeLink))









