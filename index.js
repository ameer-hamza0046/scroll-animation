const boxes = document.querySelectorAll(".box");
// console.log(boxes);
const showheight = 0.8 * window.screen.height;

const check = () => {
  boxes.forEach((box) => {
    if (box.getBoundingClientRect().y <= showheight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", check);

check();
