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
  const container = document.querySelector('.p-under-message');
  const hiddenText = container.querySelectorAll('.hidden');
  const fadedText = container.querySelectorAll('.this-to-faded');

  // Toggle the class on the main container
  container.classList.toggle('expanded');

  // Change button text
  const button = document.getElementById('toggle-button');

  // Check the current language based on the body class
  if (document.body.classList.contains('english')) {
    // English text
    button.innerHTML = container.classList.contains('expanded') 
                       ? 'Hide text ▲' 
                       : 'Continue reading ▼';
  } else {
    // Arabic text
    button.innerHTML = container.classList.contains('expanded') 
                       ? 'إخفاء النص ▲' 
                       : 'إستمر في القراءة ▼';
  }
}