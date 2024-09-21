import { useEffect, useState } from "react";
import "./App.css";
import {
  setBgColor,
  drawRectangle,
  zoomCanvas,
  getCursorPosition,
} from "./canvasFunctions";

export default function App() {
  let scale = 1;
  let canvasWidth = 400;
  let canvasHeight = 250;
  const [canvas, SetCanvas] = useState(null);

  useEffect(() => {
    SetCanvas(document.querySelector("canvas"));
  }, []);

  setBgColor(canvas);
  return (
    <div
      style={{
        height: "100dvh",
        width: "100dvw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas
        width={canvasWidth}
        height={canvasHeight}
        onWheel={(e) => {
          scale = zoomCanvas(canvas, e, scale);
          // canvas.width = canvasWidth * scale;
          // canvas.height = canvasHeight * scale;
        }}
        onClick={(e) => {
          getCursorPosition(canvas, e, scale);
          drawRectangle(canvas, e, scale);
        }}
      ></canvas>
    </div>
  );
}
