export const WIDTH = 1280;
export const HEIGHT = 720;

/**
 * Create the HTML canvas element, append it to the DOM & return the element.
 */
export function createCanvas(): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  document.body.prepend(canvas);

  return canvas;
}

/**
 * Create the HTML canvas drawing context.
 */
export function createCanvasContext(
  canvas: HTMLCanvasElement
): CanvasRenderingContext2D {
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Unable to create 2D canvas context.');
  }

  return context;
}
