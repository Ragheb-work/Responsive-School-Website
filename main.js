// Change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
// Change navbar style on scroll

// toggle open class on FAQ Section
let faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    let icon = faq.querySelector(".faq-icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});
// toggle open class on FAQ Section

// toggle nav menu
let menu = document.querySelector(".nav-menu");
let menuBtn = document.querySelector("#open-menu-btn ");
let closeBtn = document.querySelector("#close-menu-btn ");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});
// Close Nav menu
let closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNav);
// Close Nav menu

// toggle nav menu
