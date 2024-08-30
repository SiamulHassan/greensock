const menu = document.querySelector(".menu");
const nav_items = document.querySelector(".nav_items");
const close = document.querySelector(".nav_items span");
const nav_li = document.querySelector(".nav_items li");

const navMenu = function () {
  const tl = gsap.timeline();

  tl.to(nav_items, {
    right: 0,
    duration: 0.7,
  });
  tl.from(".nav_items li", {
    opacity: 0,
    x: 80,
    duraton: 0.7,
    stagger: 0.3,
  });
  tl.pause();
  menu.addEventListener("click", () => {
    console.log("cdfs");
    tl.play();
  });
  close.addEventListener("click", () => {
    tl.reverse();
  });
};
navMenu();
