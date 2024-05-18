const screen = document.querySelector("#screen");

document.addEventListener("DOMContentLoaded", () => {
  generateScreen();
  drawingPen("rainbow");
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
  const rainbow = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  let rainbowIndex = 0;

  divsInScreen.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      switch (pen) {
        case "classic":
          div.style.backgroundColor = "#0e1111";
          break;
        case "rainbow":
          div.style.backgroundColor = rainbow[rainbowIndex];
          rainbowIndex = (rainbowIndex + 1) % rainbow.length;
          break;
        case "eraser":
          div.style.backgroundColor = "#D9D9D9";
          break;
      }
    });
  });
}
