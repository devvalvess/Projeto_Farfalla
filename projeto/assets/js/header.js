const menuToggle = document.getElementById("menu-toggle");
const links = document.getElementById("links");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown-link");
const dropdownMenu = document.querySelector(".dropdown-menu");


menuToggle.addEventListener("click", function () {
    links.classList.toggle("active");
});

dropdownLink.addEventListener("click", function (event) {
    if (window.innerWidth <= 768) {
        event.preventDefault();
        event.stopPropagation();
        dropdown.classList.toggle("open");
    } else {
        dropdown.classList.toggle("open");
    }
});