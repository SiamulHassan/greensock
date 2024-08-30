const h1 = document.querySelector("h1");
const h1Text = h1.innerHTML.split("");
let joinText = "";
h1Text.forEach((letter) => {
  const sentence = letter === " " ? " " : `<span>${letter}</span>`;
  joinText += sentence;
});
h1.innerHTML = joinText;

gsap.from("h1 span", {
  opacity: 0,
  y: 60,
  duration: 0.8,
  stagger: 0.3,
});
