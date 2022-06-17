const currentItem = document.querySelector(".current");
const gridItem = document.querySelectorAll(".grid-item");
const reset = document.querySelector("#reset");

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5], // Across Wins
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7], // Vertical Wins
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6], // Diagonal Wins
];
let isX = true;

const addPlay = (e) => {
  if (e.target.innerText) return;

  if (isX) {
    e.target.innerText = "X";
    currentItem.innerText = "Player O's Turn";
  } else {
    e.target.innerText = "O";
    currentItem.innerText = "Player X's Turn";
  }

  isX = !isX;
};

const checkWinner = (currentPlayer) => {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return gridItem[index].innerText === currentPlayer;
    });
  });
};

const isDraw = () => {
  return [...gridItem].every((item) => {
    return item.innerText != "";
  });
};

reset.addEventListener("click", (e) => {
  gridItem.forEach((e) => {
    e.innerText = "";
  });

  eventHandlers();

  isX = true;
  currentItem.innerText = "Player X's Turn";
});

let gameFunction = (e) => {
  const currentPlayer = isX ? "X" : "O";
  addPlay(e);
  if (checkWinner(currentPlayer)) {
    console.log(`winner is ${currentPlayer}`);
    currentItem.innerText = `The Winner is ${currentPlayer}`;
    removeEventHandlers();
  } else if (isDraw()) {
    console.log("Draw");
    currentItem.innerText = `Draw`;
    removeEventHandlers();
  }
};

const eventHandlers = () => {
  gridItem.forEach((button) => {
    button.addEventListener("click", gameFunction);
  });
  console.log("Added Events");
};

const removeEventHandlers = () => {
  gridItem.forEach((item) => {
    item.removeEventListener("click", gameFunction);
  });
};

eventHandlers();
