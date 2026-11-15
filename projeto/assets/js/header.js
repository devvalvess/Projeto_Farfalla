const menuToggle = document.getElementById("menu-toggle");
const links = document.getElementById("links");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown-link");


menuToggle.addEventListener("click", function () {
    links.classList.toggle("active");
});

dropdownLink.addEventListener("click", function () {
    if (window.innerWidth <= 900    ) {
        dropdown.classList.toggle("open");
    } else {
        dropdown.classList.toggle("open");
    }
});