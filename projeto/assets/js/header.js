const menuToggle = document.getElementById("menu-toggle");
const links = document.getElementById("links");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown-link");


menuToggle.addEventListener("click", function () {
    links.classList.toggle("active");
});

dropdownLink.addEventListener("click", function () {
        dropdown.classList.toggle("open");
});

const dropdown2 = document.querySelectorAll(".dropdown")[1];
const dropdownLink2 = document.querySelectorAll(".dropdown-link")[1];

if (dropdownLink2) {
    dropdownLink2.addEventListener("click", function () {
        dropdown2.classList.toggle("open");
    });
}