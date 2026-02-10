// HEADER HIDE / SHOW
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.style.top = "-90px";
  } else {
    header.style.top = "0";
  }
  lastScroll = currentScroll;
});

// SCROLL ANIMATIONS
const animatedElements = document.querySelectorAll(
  ".animate-left, .animate-right, .animate-up"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));

// BACKGROUND CHANGE ON SCROLL
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const products = document.querySelector(".products");

  if (window.scrollY > products.offsetTop - 200) {
    hero.style.backgroundImage =
      "url('images/image copy 2.png')";
  } else {
    hero.style.backgroundImage =
      "url('images/image copy 3.png')";
  }
});

