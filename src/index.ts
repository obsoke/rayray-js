import * as Canvas from './canvas';

const WIDTH = Canvas.WIDTH;
const HEIGHT = Canvas.HEIGHT;

/**
 * Draw a pixel of the specified colour at the specified location.
 */
function draw(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  colour: string
): void {
  ctx.fillStyle = colour;
  ctx.fillRect(x, y, 1, 1);
}

/**
 * The entry point of the program.
 */
function main(): void {
  const canvas = Canvas.createCanvas();
  const context = Canvas.createCanvasContext(canvas);

  // Draw a single pixel
  draw(context, 50, 50, 'rgb(51, 170, 51)');
}

main();
