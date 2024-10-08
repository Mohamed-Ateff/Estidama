const navSlide = () => {
  const burger = document.querySelector(".y_burger");
  const nav = document.querySelector(".y_nav_links");
  const navLinks = document.querySelectorAll(".y_nav_links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("y_nav_active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();

function toggleText() {
  // Select the hidden text and the button
  const moreText = document.querySelector(".small-faded .more-text");
  const button = document.getElementById("toggle-button");
  const paragraph = document.querySelector(".small-faded");

  // Check if the hidden text is currently visible or not
  if (moreText.classList.contains("hidden")) {
    // Show the hidden text
    moreText.classList.remove("hidden");
    paragraph.classList.remove("small-faded"); // Remove faded effect
    button.innerHTML = "إخفاء النص ▲"; // Change button text to "Hide"
  } else {
    // Hide the text
    moreText.classList.add("hidden");
    paragraph.classList.add("small-faded"); // Add faded effect back
    button.innerHTML = "إستمر في القراءة ▼"; // Change button text back to "Read More"
  }
}