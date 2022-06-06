document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function () {
        document.body.classList.remove('fade');
    }, 230);
});
document.body.classList.add('fade');


//Code snippet for the navbar 
const list = document.querySelectorAll('.list');

function activeLink (){
        list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) => 
    item.addEventListener("click", activeLink))

