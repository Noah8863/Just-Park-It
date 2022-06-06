
const navbar = document.getElementById("navbar");
const expandbtn = document.getElementById("expandbtn");

//Grabbing the whole body and removing/adding the fade class to load in the page

// document.addEventListener("DOMContentLoaded", () => {
//     window.setTimeout(function () {
//         document.body.classList.remove('fade');
//     }, 230);
// });
// document.body.classList.add('fade');


//Navbar container being grabbed
const navbar = document.getElementById('navbar');
const expandbtn = document.getElementById('expandbtn');


//Grabbing all buttons in sidebar
const homeBtn = document.getElementById("houseBtn");
const profileBtn = document.getElementById("profileBtn");
const newPostBtn = document.getElementById("newPostBtn");
const contactBtn = document.getElementById("contactBtn");
const nightDaySwitch = document.getElementById("switch");


//Grabbing all the text fonts from under the buttons
const homeText = document.getElementById("homeText");
const profileText = document.getElementById("profileText");
const newText = document.getElementById("postText");
const contactText = document.getElementById("contactText");

expandbtn.addEventListener("click", expandNavbar);

function expandNavbar() {
  //Using toggle as an "on-off" statement
  navbar.classList.toggle("sidebarExpanded");
  
//Grabbing all the text from the buttons
const homeText = document.getElementById('homeText');
const profileText = document.getElementById('profileText');
const newText = document.getElementById('postText');
const contactText = document.getElementById('contactText');

const thumbsUp = document.getElementById('helpful-thumbs-up');
const thumbsDown = document.getElementById('helpful-thumbs-down')

//Comment section elements
const commentsContainer = document.getElementById('commentContainer')
const commentBtn = document.getElementById('viewComments')

expandbtn.addEventListener('click', expandNavbar)

function expandNavbar() {
    //Using toggle as an "on-off" statement
    navbar.classList.toggle('sidebarExpanded')

    if (navbar.classList.contains('sidebarExpanded')) {
        //Adding text to the buttons if the sidebar is expanded
        homeBtn.innerHTML = '  Home'
        profileBtn.innerHTML = '  Profile'
        newPostBtn.innerHTML = '  New Post'
        contactBtn.innerHTML = '  Contact'


  if (navbar.classList.contains("sidebarExpanded")) {
    //Adding text to the buttons if the sidebar is expanded
    homeBtn.innerHTML = "  Home";
    profileBtn.innerHTML = "  Profile";
    newPostBtn.innerHTML = "  New Post";
    contactBtn.innerHTML = "  Contact";

    //Remove the navBtn class to strip all styles from the buttons
    //Can't use toggle as it wouldn't be able to flip between two classes
    //The buttons would only be able to have no style or one style
    homeBtn.classList.remove("navBtn");
    profileBtn.classList.remove("navBtn");
    newPostBtn.classList.remove("navBtn");
    contactBtn.classList.remove("navBtn");

    //Add a new style class to it
    homeBtn.classList.add("navBtnExpanded");
    profileBtn.classList.add("navBtnExpanded");
    newPostBtn.classList.add("navBtnExpanded");
    contactBtn.classList.add("navBtnExpanded");


    homeText.classList.remove("hide");
    profileText.classList.remove("hide");
    newText.classList.remove("hide");
    contactText.classList.remove("hide");

        homeText.classList.add('expandedText')
        profileText.classList.add('expandedText')
        newText.classList.add('expandedText')
        contactText.classList.add('expandedText')

        //Show the nightmode switch only when the navbar is expanded
        nightDaySwitch.classList.remove('hide')

    } else {
        //Removing text if the sidebar is not expanded
        homeBtn.innerHTML = ''
        profileBtn.innerHTML = ''
        newPostBtn.innerHTML = ''
        contactBtn.innerHTML = ''
        nightDaySwitch.classList.add('hide')


    homeText.classList.add("expandedText");
    profileText.classList.add("expandedText");
    newText.classList.add("expandedText");
    contactText.classList.add("expandedText");
    //Figure out which classes we need to fade in the text
  } else {
    //Removing text if the sidebar is not expanded
    homeBtn.innerHTML = "";
    profileBtn.innerHTML = "";
    newPostBtn.innerHTML = "";
    contactBtn.innerHTML = "";
    nightDaySwitch.classList.add("hide");

    //Same as above just opposite
    homeBtn.classList.add("navBtn");
    profileBtn.classList.add("navBtn");
    newPostBtn.classList.add("navBtn");
    contactBtn.classList.add("navBtn");


    homeBtn.classList.remove("navBtnExpanded");
    profileBtn.classList.remove("navBtnExpanded");
    newPostBtn.classList.remove("navBtnExpanded");
    contactBtn.classList.remove("navBtnExpanded");

    homeText.classList.add("hide");
    profileText.classList.add("hide");
    newText.classList.add("hide");
    contactText.classList.add("hide");
  }
}
  
        homeText.classList.add('hide')
        profileText.classList.add('hide')
        newText.classList.add('hide')
        contactText.classList.add('hide')

        nightDaySwitch.classList.add('hide')
    }
}

//Fire the functions that are called when each button is clicked
thumbsUp.addEventListener('click', helpful)
thumbsDown.addEventListener('click', nothelpful)


//Fire the function every time each button is clicked to check the status its in
thumbsUp.addEventListener('click', compare)
thumbsDown.addEventListener('click', compare)

function helpful() {
    if (thumbsUp.classList.contains('fa-regular')) {
        thumbsUp.classList.toggle('fa-solid')
    }
}

function nothelpful() {
    if (thumbsDown.classList.contains('fa-regular')) {
        thumbsDown.classList.toggle('fa-solid')
    }
}

//This function is fired every time the buttons are clicked to compare the two status
//By keeping fa-regular constantly and only toggling the fa-solid class, it creates an "on/off" switch that we can check for
//to update that buttons status. Future features would be to check which button was clicked last if both were clicked and 
//only update the opposite button status. Not both
function compare() {
    if (thumbsDown.classList.contains('fa-solid') && thumbsUp.classList.contains('fa-solid')) {
        thumbsUp.classList.remove('fa-solid')
        thumbsDown.classList.remove('fa-solid')
    }
}

commentBtn.addEventListener('click', showComments)

//Displaying the comments function for CCS
function showComments() {
    commentsContainer.classList.remove('hide')
    commentBtn.innerHTML = "Hide Comments"
}

