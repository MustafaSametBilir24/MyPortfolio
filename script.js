document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const barButton = document.getElementById("bar-button");


    /* Hidden Navbar Button */
    barButton.addEventListener("click",function() {
        navbar.classList.toggle("hidden");
    })

});