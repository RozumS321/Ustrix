import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".stack-cards", {
    direction: "horizontal", // Sets horizontal scrolling direction
    loop: true, // Enables infinite looping of slides
    spaceBetween: 16,
    slidesPerView: "auto", // Slides width is based on their content
    autoplay: {
      delay: 0, // Starts autoplay immediately, no delay between transitions
    },
    speed: 3000, // Time (in ms) for one full slide transition
    watchSlidesProgress: true, // Tracks progress of slides (needed for some advanced effects)
    watchOverflow: true, // Disables swiper if there are not enough slides to scroll
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: "auto", // Tablet and up: auto
        spaceBetween: 24,
      },
    },
  });
  new Swiper(".support-cards", {
    direction: "horizontal", // Sets horizontal scrolling direction
    loop: true, // Enables infinite looping of slides
    spaceBetween: 16,
    slidesPerView: "auto", // Slides width is based on their content
    autoplay: {
      delay: 0, // Starts autoplay immediately, no delay between transitions
    },
    speed: 3000, // Time (in ms) for one full slide transition
    watchSlidesProgress: true, // Tracks progress of slides (needed for some advanced effects)
    watchOverflow: true, // Disables swiper if there are not enough slides to scroll
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3, // Tablet and up: auto
        spaceBetween: 24,
      },
    },
  });
  const quickMenu = document.querySelector("#quickMenuBtn");
  const nav = document.querySelector("nav");
  quickMenu.addEventListener("click", () => {
    nav.classList.toggle("open");
    const body = document.querySelector("body");
    const isOpen = nav.classList.contains("open");
    quickMenu.innerHTML = isOpen ? "&#10005;" : "&#9776; Quick Menu"; // Changes icon based on menu state
    body.style.overflow = isOpen ? "hidden" : "auto"; // Prevents scrolling when menu is open
  });
  document.addEventListener("click", (e) => {
    const contactModal = document.querySelector(".modal-backdrop");
    const body = document.body;

    const isContactBtn = e.target.classList.contains("contactBtn");
    const isModalOpen = contactModal.classList.contains("open");
    const isBackdropClick = e.target === contactModal;

    if (isContactBtn) {
      contactModal.classList.add("open");
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = "hidden";
      body.style.paddingRight = scrollBarWidth + "px";
    } else if (isModalOpen && isBackdropClick) {
      contactModal.classList.remove("open");
      body.style.overflow = "auto";
      body.style.paddingRight = "";
    }
  });
});
