const canvas = document.getElementById("drawingCanvas");
const brushSizeInput = document.getElementById("brushSize");
const selectTool = document.getElementById("selectTool");

const ctx = canvas.getContext("2d");

let drawing = false;

let history = [];

let redoStack = [];

// Function to start drawing

canvas.addEventListener("mousedown", () => {
  drawing = true;
  ctx.beginPath();
  saveState();
});

// Function to stop drawing

canvas.addEventListener("mouseup", () => {
  drawing = false;
});

// Function to draw on the canvas

canvas.addEventListener("mousemove", (event) => {
  if (!drawing) return;

  brushSizeInput.addEventListener("input", (bSize) => {
    brushSize = bSize.target.value;
  });

  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.strokeStyle = document.getElementById("colorPicker").value;
  ctx.lineTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );

  // console.log(`Mouse coordinates: X=${event.clientX}, Y=${event.clientY}`);
});

// Save the drawing as an image

document.getElementById("saveButton").addEventListener("click", () => {
  const dataURL = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "drawing.png";
  link.click();
});

// Save the current state of the canvas

function saveState() {
  if (drawing) {
    history.push(canvas.toDataURL());
    redoStack = []; // Reset redo stack
  }
}

// Undo the last action

document.getElementById("undoButton").addEventListener("click", () => {
  if (history.length > 0) {
    redoStack.push(history.pop());
    restoreState(history[history.length - 1]);
  }
});

// Redo the last undone action

document.getElementById("redoButton").addEventListener("click", () => {
  if (redoStack.length > 0) {
    const restoredState = redoStack.pop();
    history.push(restoredState);
    restoreState(restoredState);
  }
});

// Restore the canvas to a previous state

function restoreState(state) {
  const img = new Image();
  img.src = state;
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };
}

// reset
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
  // Clear the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log("Canvas reset");
});

// paste js
const pasteTextButton = document.getElementById("pasteTool");

let clipboard = "Sample pasted text"; // Text to be pasted
let textX = 50; // X-coordinate for pasted text
let textY = 100; // Y-coordinate for pasted text

// Function to draw text on the canvas
function drawText(text, x, y) {
  ctx.font = "29px Arial";
  ctx.fillStyle = "goldenrod";
  ctx.fillText(text.toUpperCase(), x, y);
}

// Function to handle paste operation
pasteTextButton.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText(); // Read text from clipboard
    if (text) {
      drawText(text, textX, textY); // Draw the pasted text on the canvas
      textX += 20; // Update x-coordinate for the next paste
      textY += 20; // Update y-coordinate for the next paste
      console.log("Text pasted:", text);
    } else {
      console.log("Clipboard is empty");
    }
  } catch (err) {
    console.error("Failed to read clipboard contents:", err);
  }
});

// Initial draw to test
drawText("Paste text here.", 50, 50);

//  copy

function copyCanvasAsText() {
  const dataURL = canvas.toDataURL(); // Get the base64 string of the canvas
  const textArea = document.createElement("textarea"); // Create a temporary textarea to hold the text

  textArea.value = dataURL; // Set the base64 string as the value of the textarea
  document.body.appendChild(textArea); // Append the textarea to the document

  textArea.select(); // Select the textarea content
  document.execCommand("copy"); // Copy the selected content to the clipboard

  document.body.removeChild(textArea); // Remove the textarea from the document

  console.log("Canvas base64 string copied to clipboard!");
}

// Example usage: Copy when a button is clicked
const copyButton = document.getElementById("copyTool");
copyButton.addEventListener("click", copyCanvasAsText);
