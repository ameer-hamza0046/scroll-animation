const boxes = document.querySelectorAll(".box");
const showheight = 0.8 * window.innerHeight;

const check = () => {
  boxes.forEach((box) => {
    if (box.getBoundingClientRect().top <= showheight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", check);

check();
