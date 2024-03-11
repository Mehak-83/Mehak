document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleButton");
  const navbar = document.getElementById("navbar");

  toggleButton.addEventListener("click", function() {
    navbar.classList.toggle("show");
  });
});
