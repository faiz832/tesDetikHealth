// === resopnsive navbar ===
document.addEventListener("DOMContentLoaded", function () {
  const navIcon = document.querySelector(".nav-icon");
  const navItemGroup = document.querySelector(".nav-item-group");

  navIcon.addEventListener("click", function () {
    // Toggle class 'active' to switch between display: none and display: block
    navItemGroup.classList.toggle("active");
  });
});
