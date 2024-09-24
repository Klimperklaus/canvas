let context = null;
let savedCtx = null;

/**
 * 
 * @param canvas > canvas element 
 * @returns > created 2d context of canvas element
 */
export function createContext(canvas) {
  if (canvas) {
    context = canvas.getContext("2d");
    return context;
  }
}

export function setBgColor(context) {
  if (context) {
    context.canvas.style = "background-color: white";
  }
}

/**
 *
 * @param context > used context from canvas
 * @param event > eventHandler
 * @param scale > current scale
 * @description > Uses the context from canvas element to create a rectangle
 * filled with user color placed at the current cursor location relative
 * to the canvas scale and position on screen. Rectangle size is 5x5.
 */
export function drawRectangle(context, event, scale) {
  if (context) {
    context.fillStyle = "rgba(200, 0, 0, 1)";
    context.fillRect(
      parseInt(getCursorPosition(context, event, scale).X),
      parseInt(getCursorPosition(context, event, scale).Y),
      5,
      5
    ); // x, y, w, h
    savedCtx = context.save();
  }
}

/**
 *
 * @param context > used context from canvas
 * @param event > eventHandler
 * @param scale > current scale
 * @returns > new scale
 */
export function zoomCanvas(context, event, scale) {
  if (context) {
    scale += event.deltaY * -0.002;
    scale = Math.min(Math.max(1, scale), 3);
    context.canvas.style.transform = `scale(${scale})`;
    return {Scale: scale, Ctx: savedCtx};
  }
}

export function getCursorPosition(context, event, scale) {
  if (context) {
    const rect = context.canvas.getBoundingClientRect();
    let x = ((event.clientX - rect.left) / scale).toFixed(2);
    let y = ((event.clientY - rect.top) / scale).toFixed(2);
    return { X: x, Y: y };
  }
}
