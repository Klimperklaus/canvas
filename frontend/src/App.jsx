import { useEffect, useState } from "react";
import "./App.css";
import {
  setBgColor,
  drawRectangle,
  zoomCanvas,
  getCursorPosition,
  setContext,
} from "./canvasFunctions";

export default function App() {
  const [canvas, SetCanvas] = useState(null);
  const [context, SetContext] = useState(null);
  let color = "";

  let scale = 1;
  let canvasWidth = 400;
  let canvasHeight = 250;

  useEffect(() => {
    SetCanvas(document.querySelector("canvas"));
    if (canvas) {
      SetContext(setContext(canvas));
      console.log("canvas set");
      if (context) {
        console.log("context set");
      }
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
      <div
        style={{
          height: "100dvh",
          width: "10dvw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top: "30%",
          left: 0,
          position: "sticky",
          backgroundColor: "rgb(20, 20, 20)",
        }}
      >
        <h1 style={{ color: "white", paddingBottom: "2rem" }}>COLORS</h1>
        <ul
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            gap: "1rem",
          }}
        >
          <li
            style={{
              background: "yellow",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            onClick={(e) => {
              color = e.target.style.backgroundColor;
              console.log(color);
            }}
          ></li>
          <li
            style={{
              background: "red",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            onClick={(e) => {
              color = e.target.style.backgroundColor;
              console.log(color);
            }}
          ></li>
          <li
            style={{
              background: "green",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            onClick={(e) => {
              color = e.target.style.backgroundColor;
              console.log(color);
            }}
          ></li>
          <li
            style={{
              background: "purple",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            onClick={(e) => {
              color = e.target.style.backgroundColor;
              console.log(color);
            }}
          ></li>
        </ul>
      </div>
      <div
        style={{
          width: "90dvw",
          height: "100dvh",
          justifyContent: "center",
          cursor: "crosshair",
        }}
      >
        <canvas
          width={canvasWidth}
          height={canvasHeight}
          onWheel={(e) => {
            scale = zoomCanvas(context, e, scale);
            context.canvas.width = canvasWidth * scale;
            context.canvas.height = canvasHeight * scale;
            console.log(scale);
          }}
          onClick={(e) => {
            getCursorPosition(context, e, scale);
            drawRectangle(context, e, scale, color);
          }}
        ></canvas>
      </div>
    </div>
  );
}
