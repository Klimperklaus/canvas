export function setBgColor(canvas) {
  if (canvas) {
    canvas.style = "background-color: white";
  }
}

/**
 *
 * @param canvas > used element
 * @param event > eventHandler
 * @param scale > current scale
 * @description > Creates 2d context for canvas and a rectangle
 * filled with user color placed at the current cursor location relative
 * to the canvas scale and position on screen. Rectangle size is 1x1.
 */
export function drawRectangle(canvas, event, scale) {
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200 0 0)";
    const rect = canvas.getBoundingClientRect();
    // for-loop needed to get fully filled rectangles
    for (let i = 0; i < 10; i++) {
      ctx.fillRect(
        ((event.clientX - rect.left) / scale).toFixed(2),
        ((event.clientY - rect.top) / scale).toFixed(2),
        1,
        1
      ); // x, y, w, h
    }
    // ctx.strokeRect(10, 10, 2.5, 2.5);
  }
}

/**
 *
 * @param canvas > used element
 * @param event > eventHandler
 * @param scale > current scale
 * @returns > new scale
 */
export function zoomCanvas(canvas, event, scale) {
  if (canvas) {
    scale += event.deltaY * -0.002;
    scale = Math.min(Math.max(1, scale), 3);
    canvas.style.transform = `scale(${scale})`;
    return scale;
  }
}

export function getCursorPosition(canvas, event, scale) {
  if (canvas) {
    const rect = canvas.getBoundingClientRect();
    let x = ((event.clientX - rect.left) / scale).toFixed(2);
    let y = ((event.clientY - rect.top) / scale).toFixed(2);
    console.log(`X: ${x}, Y: ${y}`);
    console.log(
      `rect left: ${rect.left.toFixed(2)}, rect top: ${rect.top.toFixed(2)}`
    );
  }
}
