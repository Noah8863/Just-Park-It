const navbar = document.getElementById("navbar");
const expandbtn = document.getElementById("expandbtn");

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
