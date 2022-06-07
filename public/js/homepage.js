document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
    document.body.classList.remove('fade');
  }, 230);
});
document.body.classList.add('fade');


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
      image: { src: "img/github.svg", width: 100, height: 100 }
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



// import {rating} from "/js/review.js"

// const oneStarRatingFinal = document.getElementById('1starFinal')
// const twoStarRatingFinal = document.getElementById('2starFinal')
// const threeStarRatingFinal = document.getElementById('3starFinal')
// const fourStarRatingFinal = document.getElementById('4starFinal')
// const fiveStarRatingFinal = document.getElementById('5starFinal')


// function final() {
//       if (rating = 1) {
//         oneStarRatingFinal.classList.add('checked')
//         twoStarRatingFinal.classList.remove('checked')
//         threeStarRatingFinal.classList.remove('checked')
//         fourStarRatingFinal.classList.remove('checked')
//         fiveStarRatingFinal.classList.remove('checked')
//       }
//       if (rating = 2) {
//         oneStarRatingFinal.classList.add('checked')
//         twoStarRatingFinal.classList.add('checked')
//         threeStarRatingFinal.classList.remove('checked')
//         fourStarRatingFinal.classList.remove('checked')
//         fiveStarRatingFinal.classList.remove('checked')
//       }
//       if (rating = 3) {
//         oneStarRatingFinal.classList.add('checked')
//         twoStarRatingFinal.classList.add('checked')
//         threeStarRatingFinal.classList.add('checked')
//         fourStarRatingFinal.classList.remove('checked')
//         fiveStarRatingFinal.classList.remove('checked')
//       }
//       if (rating = 4) {
//         oneStarRatingFinal.classList.add('checked')
//         twoStarRatingFinal.classList.add('checked')
//         threeStarRatingFinal.classList.add('checked')
//         fourStarRatingFinal.classList.add('checked')
//         fiveStarRatingFinal.classList.remove('checked')
//       }
//       if (rating = 5) {
//         oneStarRatingFinal.classList.add('checked')
//         twoStarRatingFinal.classList.add('checked')
//         threeStarRatingFinal.classList.add('checked')
//         fourStarRatingFinal.classList.add('checked')
//         fiveStarRatingFinal.classList.add('checked')
//       }
// }

// final()