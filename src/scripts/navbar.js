document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("[data-toggle-nav");
  const navLinks = document.getElementById("nav-links");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
});
