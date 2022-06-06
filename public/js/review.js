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
