const screen = document.querySelector("#screen");

document.addEventListener("DOMContentLoaded", () => {
  generateScreen();
  drawingPen();
});

function generateScreen(screenSize = 16) {
  const divSize = 600 / screenSize - 2;

  for (let i = 0; i < screenSize * screenSize; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.width = `${divSize}px`;
    screen.appendChild(createDiv);
  }
}

function drawingPen(pen = "classic") {
  const divsInScreen = document.querySelectorAll("#screen div");

  divsInScreen.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "#0e1111";
    });
  });
}
