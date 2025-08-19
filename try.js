  //For the transitions
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));

  const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".navbar ul");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent outside click close
  navLinks.classList.toggle("active");

  // toggle between bars and X
  if (navLinks.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// Closes the navbar when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});




