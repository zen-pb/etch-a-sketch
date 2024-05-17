const screen = document.querySelector("#screen");

document.addEventListener("DOMContentLoaded", () => {
    generateScreen();
});

function generateScreen(screenSize = 16) {
  const divSize = 600 / screenSize - 2;

  for (let i = 0; i < screenSize * screenSize; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.width = `${divSize}px`;
    screen.appendChild(createDiv);
  }
}
