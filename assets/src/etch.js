const screen = document.querySelector("#screen");
const colorPicker = document.querySelector("#colorPicker");
const palletteButtons = document.querySelectorAll("#palletteButtons button");
const canvasSetButtons = document.querySelectorAll("#canvasSetButtons button");
const customCanvasSize = document.querySelector("#customSize");
const rangeSize = document.querySelector("#rangeSize");

document.addEventListener("DOMContentLoaded", () => {
  let currentScreenSize = 16;
  let currentPen = "classic";
  let customColor = colorPicker.value;

  generateScreen(currentScreenSize);
  drawingPen(currentPen);

  colorPicker.addEventListener("input", () => {
    customColor = colorPicker.value;
    currentPen = "custom";
    drawingPen(customColor);
  });

  palletteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "classic":
          currentPen = "classic";
          drawingPen(currentPen);
          break;
        case "rainbow":
          currentPen = "rainbow";
          drawingPen(currentPen);
          break;
        case "eraser":
          currentPen = "eraser";
          drawingPen(currentPen);
          break;
        case "clear":
          regenerateScreen(currentScreenSize);
          if (currentPen === "custom") {
            drawingPen(customColor);
          } else {
            drawingPen(currentPen === "eraser" ? "classic" : currentPen);
          }
          break;
      }
    });
  });

  canvasSetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "8by":
          regenerateScreen((currentScreenSize = 8));
          drawingPen(currentPen);
          break;
        case "16by":
          regenerateScreen((currentScreenSize = 16));
          drawingPen(currentPen);
          break;
        case "32by":
          regenerateScreen((currentScreenSize = 32));
          drawingPen(currentPen);
          break;
      }
    });
  });

  customCanvasSize.addEventListener("input", () => {
    regenerateScreen((currentScreenSize = customCanvasSize.value));
    drawingPen(currentPen);
  });
});

function generateScreen(screenSize) {
  const divSize = 600 / screenSize - 2;

  for (let i = 0; i < screenSize * screenSize; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.width = `${divSize}px`;
    screen.appendChild(createDiv);
  }
}

function drawingPen(pen) {
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
        default:
          div.style.backgroundColor = pen;
          break;
      }
    });
  });
}

function regenerateScreen(currentScreenSize) {
  screen.innerHTML = "";
  rangeSize.innerHTML = `${currentScreenSize} x ${currentScreenSize}`;
  generateScreen(currentScreenSize);
}
