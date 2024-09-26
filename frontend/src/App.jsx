import { useEffect, useState } from "react";
import "./App.css";
import {
  setBgColor,
  drawRectangle,
  zoomCanvas,
  getCursorPosition,
  setContext,
  getSavedCtx,
  setSavedCtx,
} from "./canvasFunctions";

export default function App() {
  const [canvas, SetCanvas] = useState(null);
  const [context, SetContext] = useState(null);

  let scale = 1;
  let canvasWidth = 400;
  let canvasHeight = 250;
  let savedContext = null;

  useEffect(() => {
    SetCanvas(document.querySelector("canvas"));
    if (canvas) {
      console.log("canvas set");
    }
    SetContext(setContext(canvas));
    if (context) {
      console.log("context set");
    }
  }, [canvas, context]);

  setBgColor(context);
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
          scale = zoomCanvas(context, e, scale);
          context.canvas.width = canvasWidth * scale;
          context.canvas.height = canvasHeight * scale;
        }}
        onClick={(e) => {
          getCursorPosition(context, e, scale);
          drawRectangle(context, e, scale);
        }}
      ></canvas>
    </div>
  );
}
