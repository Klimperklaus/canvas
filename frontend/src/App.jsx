import { useEffect, useState } from "react";
import "./App.css";
import {
  setBgColor,
  drawRectangle,
  zoomCanvas,
  getCursorPosition,
  createContext
} from "./canvasFunctions";

export default function App() {
  useEffect(() => {
    SetCanvas(document.querySelector("canvas"));
    console.log("canvas set")
  }, []);

  let scale = 1;
  let canvasWidth = 400;
  let canvasHeight = 250;
  const [canvas, SetCanvas] = useState(null);
  const context = createContext(canvas);
  let savedCtx = null;
  
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
          // savedCtx = zoomCanvas(canvas, e, scale).Ctx;
          scale = zoomCanvas(canvas, e, scale).Scale;
          canvas.width = canvasWidth * scale;
          canvas.height = canvasHeight * scale;
          // ctx.restore(savedCtx);
        }}
        onClick={(e) => {
          getCursorPosition(canvas, e, scale);
          drawRectangle(canvas, e, scale);
        }}
      ></canvas>
    </div>
  );
}

/**
 * To save pixels on a canvas and be able to reuse them when changing the width and height, you can use the `save()`
method of the canvas context. This method saves the current state of the canvas, including the current drawing
buffer, and returns an object that represents the saved state. You can then retrieve this object later and restore
it using the `restore()` method.

Here's an example:
```
// Get the current state of the canvas
const savedState = ctx.save();

// Change the width and height of the canvas
ctx.canvas.width = 500;
ctx.canvas.height = 300;

// Restore the previous state of the canvas
ctx.restore(savedState);
```
In this example, the `save()` method is called to save the current state of the canvas, and the returned object is
stored in the variable `savedState`. Later, the width and height of the canvas are changed, but the saved state is
restored using the `restore()` method.

Note that the `save()` method saves the entire drawing buffer, including the current transform matrix, stroke
style, line dash pattern, and so on. If you only want to save a specific part of the canvas, you can use the
`save()` method with a sub-region parameter, like this:
```
// Get the current state of a specific region of the canvas
const savedState = ctx.save(0, 0, 100, 100);
```
This will save only the pixels within the specified rectangle (in this case, the top left corner is at (0, 0) and
the bottom right corner is at (100, 100)).
 */
