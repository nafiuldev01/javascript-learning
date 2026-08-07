const buttons = document.querySelectorAll(".button");
const resetButton = document.querySelector("#reset");
const body = document.querySelector("body");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});

resetButton.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});
