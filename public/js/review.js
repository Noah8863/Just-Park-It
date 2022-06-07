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




//Code Snippet for the background
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 140 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  




//Five Star Rating System
//Couldnt get this figured out in time

// let totalrating = 0;

// const oneStarRating = document.getElementById('1star')
// const twoStarRating = document.getElementById('2star')
// const threeStarRating = document.getElementById('3star')
// const fourStarRating = document.getElementById('4star')
// const fiveStarRating = document.getElementById('5star')



// function rating1() {
//   totalrating = 1
//   // final()
//   console.log(totalrating)
//   oneStarRating.classList.add('checked')
//   twoStarRating.classList.remove('checked')
//   threeStarRating.classList.remove('checked')
//   fourStarRating.classList.remove('checked')
//   fiveStarRating.classList.remove('checked')
// }

// function rating2() {
//   totalrating = 2
//   // final()
//   console.log(totalrating)
//   oneStarRating.classList.add('checked')
//   twoStarRating.classList.add('checked')
//   threeStarRating.classList.remove('checked')
//   fourStarRating.classList.remove('checked')
//   fiveStarRating.classList.remove('checked')
// }

// function rating3() {
//   totalrating = 3
//   // final()
//   console.log(totalrating)
//   oneStarRating.classList.add('checked')
//   twoStarRating.classList.add('checked')
//   threeStarRating.classList.add('checked')
//   fourStarRating.classList.remove('checked')
//   fiveStarRating.classList.remove('checked')
// }

// function rating4() {
//   totalrating = 4
//   // final()
//   console.log(totalrating)
//   oneStarRating.classList.add('checked')
//   twoStarRating.classList.add('checked')
//   threeStarRating.classList.add('checked')
//   fourStarRating.classList.add('checked')
//   fiveStarRating.classList.remove('checked')
// }

// function rating5() {
//   totalrating = 5
//   // final()
//   console.log(totalrating)
//   oneStarRating.classList.add('checked')
//   twoStarRating.classList.add('checked')
//   threeStarRating.classList.add('checked')
//   fourStarRating.classList.add('checked')
//   fiveStarRating.classList.add('checked')
// }

// export  {totalrating};

