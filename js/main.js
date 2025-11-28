/* =========================================================
   INITIALIZE EMAILJS
========================================================= */
(function () {
  emailjs.init("7Jb0y0DlxX0kww78I"); // Your Public Key
})();

/* =========================================================
   SCROLL PROGRESS BAR
========================================================= */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / height) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

/* =========================================================
   INTRO TEXT FADE OUT
========================================================= */
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.classList.add("fade-out");
  }, 2000);
});

/* =========================================================
   GLASS TESTIMONIAL SLIDER
========================================================= */
let testimonialIndex = 0;
const testimonialCards = document.querySelectorAll(".testimonial-card");

function rotateTestimonials() {
  testimonialCards.forEach(card => card.classList.remove("active"));
  testimonialCards[testimonialIndex].classList.add("active");

  testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
}

if (testimonialCards.length) {
  rotateTestimonials();
  setInterval(rotateTestimonials, 4000);
}

/* =========================================================
   FAQ LUXURY ACCORDION
========================================================= */
document.querySelectorAll(".faq-item").forEach(item => {
  const question = item.querySelector("h4");
  const answer = item.querySelector("p");

  answer.style.maxHeight = "0px";

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // Close all others
    document.querySelectorAll(".faq-item").forEach(f => {
      f.classList.remove("open");
      f.querySelector("p").style.maxHeight = "0px";
    });

    // Toggle selected
    if (!isOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

/* =========================================================
   EMAILJS CONTACT FORM — GOLD TOAST SYSTEM
========================================================= */
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Toast element
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "Sending...";
    document.body.appendChild(toast);

    try {
      await emailjs.sendForm(
        "service_yftzbkd",
        "template_5eh3cfs",
        this,
        "7Jb0y0DlxX0kww78I"
      );

      toast.textContent = "Message sent successfully!";
      form.reset();
    } catch (err) {
      toast.textContent = "Error sending message.";
      console.error(err);
    }

    setTimeout(() => toast.remove(), 3000);
  });
}

/* =========================================================
   PREMIUM SCROLL REVEAL ANIMATIONS
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".about-img, .about-content, .mission-card, .speak-card, .financial-card"
  );

  const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        el.classList.add("revealed");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

/* =========================================================
   SMOOTH SCROLLING FOR NAVIGATION LINKS
========================================================= */
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

/* =========================================================
   NAVIGATION BAR — FUTURE HOOKS FOR LUXURY MENU
========================================================= */

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav?.classList.add("nav-scrolled");
  } else {
    nav?.classList.remove("nav-scrolled");
  }
});

/* For mobile toggle (we will fully style this next) */
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-nav");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    menuBtn.classList.toggle("active");
  });
}
