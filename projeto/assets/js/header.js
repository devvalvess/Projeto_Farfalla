const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("links");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});