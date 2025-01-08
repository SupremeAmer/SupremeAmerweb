
// Add event listener to the header navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector("header nav ul");

  // Add event listener to each navigation menu item
  navMenu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
