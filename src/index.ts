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

  console.log(`Starting to draw...`);

  const start = performance.now();
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const r = x / WIDTH;
      const actualG = HEIGHT - y; // Unlike tutorial, we aren't counting pixel we draw to + Y colour separately
      const g = actualG / HEIGHT;
      const b = 0.2;
      const ir = r * 255.99;
      const ig = g * 255.99;
      const ib = b * 255.99;
      const colourString = `rgb(${ir}, ${ig}, ${ib})`;
      draw(context, x, y, colourString);
    }
  }
  const end = performance.now();

  console.log(`Finished drawing; took ${(end - start) / 1000}s`);
}

main();
