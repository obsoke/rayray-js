import Vec3 from './vec3';

export default class Ray {
  private origin: Vec3; // "A" in "Ray Tracing in One Weekend"
  private direction: Vec3; // "B" in "Ray Tracing in One Weekend"

  constructor(origin: Vec3, direction: Vec3) {
    this.origin = origin;
    this.direction = direction;
  }

  public get_origin(): Vec3 {
    return this.origin;
  }

  public get_direction(): Vec3 {
    return this.direction;
  }

  public point_at_parameter(t: number): Vec3 {
    return this.origin.add(this.direction.multiply_scalar(t));
  }
}
