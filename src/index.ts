import * as Canvas from './canvas';
import Vec3 from './vec3';
import Ray from './ray';

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
 * Calculate the colour that the given ray will sample in the scene.
 */
function color(ray: Ray): Vec3 {
  const unit_direction = Vec3.unit_vector(ray.get_direction());
  const t = 0.5 * (unit_direction.y() + 1.0);
  const a = new Vec3(1.0, 1.0, 1.0).multiply_scalar(1.0 - t);
  const b = new Vec3(0.5, 0.7, 1.0).multiply_scalar(t);
  return a.add(b);
}

/**
 * The entry point of the program.
 */
function main(): void {
  const canvas = Canvas.createCanvas();
  const context = Canvas.createCanvasContext(canvas);

  const lower_left_corner = new Vec3(-2.0, -1.0, -1.0);
  const horizontal = new Vec3(4.0, 0.0, 0.0);
  const vertical = new Vec3(0.0, 2.0, 0.0);
  const origin = new Vec3(0.0, 0.0, 0.0);

  console.log(`Starting to draw...`);
  const start = performance.now();
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const true_x = x / WIDTH;
      // Tutorial expects that you are writing to a file from 0> but using Y values from (HEIGHT-1)<
      const true_y = (HEIGHT - y) / HEIGHT;

      const i = horizontal.multiply_scalar(true_x);
      const j = vertical.multiply_scalar(true_y);
      const direction = lower_left_corner.add(i).add(j);

      const ray = new Ray(origin, direction);
      const colour = color(ray);

      const ir = colour.r() * 255.99;
      const ig = colour.g() * 255.99;
      const ib = colour.b() * 255.99;
      const colourString = `rgb(${ir}, ${ig}, ${ib})`;

      draw(context, x, y, colourString);
    }
  }
  const end = performance.now();
  console.log(`Finished drawing; took ${(end - start) / 1000}s`);
}

main();
