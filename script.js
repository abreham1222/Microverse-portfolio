const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".navbar-desk");

humburger.addEventListener("click", () => {
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})