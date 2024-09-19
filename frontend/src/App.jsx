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
  const [canvas, SetCanvas] = useState(null);

  useEffect(() => {
    SetCanvas(document.querySelector("canvas"));
  }, [canvas]);

  setBgColor(canvas);
  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas
        width="400"
        height="250"
        onWheel={(e) => {
          scale = zoomCanvas(canvas, e, scale);
        }}
        onClick={(e) => {
          getCursorPosition(canvas, e, scale);
          drawRectangle(canvas, e, scale);
        }}
      ></canvas>
    </div>
  );
}
