const cursor = document.querySelector(".cursor");
const main = document.querySelector(".main");
const box = document.querySelector(".box");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
  });
});
box.addEventListener("mouseenter", () => {
  cursor.innerHTML = "Inner";
  gsap.to(cursor, {
    scale: 5,
  });
});
box.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
