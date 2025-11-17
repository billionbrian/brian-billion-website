/* ---------------------------------------------
   INITIALIZE EMAILJS
--------------------------------------------- */
(function () {
  emailjs.init("7Jb0y0DlxX0kww78I"); // Your Public Key
})();

/* ---------------------------------------------
   SCROLL PROGRESS BAR
--------------------------------------------- */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  document.getElementById("progress-bar").style.width =
    (scrollTop / height) * 100 + "%";
});

/* ---------------------------------------------
   INTRO TEXT FADE OUT
--------------------------------------------- */
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.style.display = "none";
  }, 2500);
});

/* ---------------------------------------------
   TESTIMONIALS CAROUSEL
--------------------------------------------- */
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 0) {
  testimonials[0].classList.add("active");

  setInterval(() => {
    testimonials[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add("active");
  }, 4000);
}

/* ---------------------------------------------
   FAQ DROPDOWN TOGGLES
--------------------------------------------- */
document.querySelectorAll(".faq-item h4").forEach(faq => {
  faq.addEventListener("click", () => {
    const answer = faq.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

/* ---------------------------------------------
   EMAILJS CONTACT FORM
--------------------------------------------- */
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Toast Indicator
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
      console.error(err);
      toast.textContent = "Error sending message.";
    }

    setTimeout(() => toast.remove(), 3000);
  });
}

/* ---------------------------------------------
   SCROLL REVEAL ANIMATIONS
--------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".about-img, .about-content, .mission-card"
  );

  const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load
});
