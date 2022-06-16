const currentItem = document.querySelector(".current");
const gridItem = document.querySelectorAll(".grid-item");
const reset = document.querySelector("#reset");

// prettier-ignore
{
let gridArr = ["X", "O", "X",
               "X", "X", "X",
               "O", "O", "O"];
}

let isX = true;

const addPlay = (e) => {
  if (e.target.innerText) return;

  if (isX) {
    e.target.innerText = "X";
    currentItem.innerText = "O";
  } else {
    e.target.innerText = "O";
    currentItem.innerText = "X";
  }

  isX = !isX;
};

const checkWinner = () => {};

gridItem.forEach((button) => {
  button.addEventListener("click", (e) => {
    addPlay(e);
    checkWinner();
  });
});

reset.addEventListener("click", (e) => {
  gridItem.forEach((e) => {
    e.innerText = "";
  });
});
