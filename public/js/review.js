document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
    document.body.classList.remove('fade');
  }, 230);
});
document.body.classList.add('fade');


const reviewHandler = async (event) => {
  event.preventDefault();

  const description = document.getElementById("review").value.trim();
  const address = document.getElementById("address").value.trim();
  const title = document.getElementById("title").value.trim();
  const carMake = document.getElementById("carMake").value.trim();
  const carSize = document.getElementById("carSize").value.trim();
  const parkingType = document.getElementById("parkingType").value.trim()


  if (description) {
    const response = await fetch("api/reviews", {
      method: "POST",
      body: JSON.stringify({ description, address, title, carMake, carSize, parkingType }),
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
function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) =>
  item.addEventListener("click", activeLink))


//Five Star Rating System
//Couldnt get this figured out in time
// let totalrating;

// const oneStarRating = document.getElementById('1star')
// const twoStarRating = document.getElementById('2star')
// const threeStarRating = document.getElementById('3star')
// const fourStarRating = document.getElementById('4star')
// const fiveStarRating = document.getElementById('5star')

// if (oneStarRating) {
//   oneStarRating.addEventListener("click", rating1)
// }
// if (twoStarRating) {
//   twoStarRating.addEventListener("click", rating2)
// }
// if (threeStarRating) {
//   threeStarRating.addEventListener("click", rating3)
// }
// if (fourStarRating) {
//   fourStarRating.addEventListener("click", rating4)
// }
// if (fiveStarRating) {
//   fiveStarRating.addEventListener("click", rating5)
// }

// function rating1() {
//   totalrating = 1
//   final()
//   console.log(totalrating)
//   oneStarRating.classList.add('checked')
//   twoStarRating.classList.remove('checked')
//   threeStarRating.classList.remove('checked')
//   fourStarRating.classList.remove('checked')
//   fiveStarRating.classList.remove('checked')
// }

// function rating2() {
//   totalrating = 2
//   final()
//   console.log(totalrating)
//   oneStarRating.classList.add('checked')
//   twoStarRating.classList.add('checked')
//   threeStarRating.classList.remove('checked')
//   fourStarRating.classList.remove('checked')
//   fiveStarRating.classList.remove('checked')
// }

// function rating3() {
//   totalrating = 3
//   final()
//   console.log(totalrating)
//   oneStarRating.classList.add('checked')
//   twoStarRating.classList.add('checked')
//   threeStarRating.classList.add('checked')
//   fourStarRating.classList.remove('checked')
//   fiveStarRating.classList.remove('checked')
// }

// function rating4() {
//   totalrating = 4
//   final()
//   console.log(totalrating)
//   oneStarRating.classList.add('checked')
//   twoStarRating.classList.add('checked')
//   threeStarRating.classList.add('checked')
//   fourStarRating.classList.add('checked')
//   fiveStarRating.classList.remove('checked')
// }

// function rating5() {
//   totalrating = 5
//   final()
//   console.log(totalrating)
//   oneStarRating.classList.add('checked')
//   twoStarRating.classList.add('checked')
//   threeStarRating.classList.add('checked')
//   fourStarRating.classList.add('checked')
//   fiveStarRating.classList.add('checked')
// }

// const oneStarRatingFinal = document.getElementById('1starFinal')
// const twoStarRatingFinal = document.getElementById('2starFinal')
// const threeStarRatingFinal = document.getElementById('3starFinal')
// const fourStarRatingFinal = document.getElementById('4starFinal')
// const fiveStarRatingFinal = document.getElementById('5starFinal')
    
// function final() {
//       if (totalrating = 1) {
//         oneStarRatingFinal.classList.add('checked')
//         twoStarRatingFinal.classList.remove('checked')
//         threeStarRatingFinal.classList.remove('checked')
//         fourStarRatingFinal.classList.remove('checked')
//         fiveStarRatingFinal.classList.remove('checked')
//       }
//       if (totalrating = 2) {
//         oneStarRatingFinal.classList.add('checked')
//         twoStarRatingFinal.classList.add('checked')
//         threeStarRatingFinal.classList.remove('checked')
//         fourStarRatingFinal.classList.remove('checked')
//         fiveStarRatingFinal.classList.remove('checked')
//       }
//       if (totalrating = 3) {
//         oneStarRatingFinal.classList.add('checked')
//         twoStarRatingFinal.classList.add('checked')
//         threeStarRatingFinal.classList.add('checked')
//         fourStarRatingFinal.classList.remove('checked')
//         fiveStarRatingFinal.classList.remove('checked')
//       }
//       if (totalrating = 4) {
//         oneStarRatingFinal.classList.add('checked')
//         twoStarRatingFinal.classList.add('checked')
//         threeStarRatingFinal.classList.add('checked')
//         fourStarRatingFinal.classList.add('checked')
//         fiveStarRatingFinal.classList.remove('checked')
//       }
//       if (totalrating = 5) {
//         oneStarRatingFinal.classList.add('checked')
//         twoStarRatingFinal.classList.add('checked')
//         threeStarRatingFinal.classList.add('checked')
//         fourStarRatingFinal.classList.add('checked')
//         fiveStarRatingFinal.classList.add('checked')
//       }
// }