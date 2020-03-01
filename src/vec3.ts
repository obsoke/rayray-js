export default class Vec3 {
  private vector: number[];

  constructor(x: number, y: number, z: number) {
    this.vector = [x, y, z];
  }

  public static unit_vector(vec: Vec3): Vec3 {
    return vec.divide_scalar(vec.length());
  }

  public x(): number {
    return this.vector[0];
  }
  public y(): number {
    return this.vector[1];
  }
  public z(): number {
    return this.vector[2];
  }
  public r(): number {
    return this.vector[0];
  }
  public g(): number {
    return this.vector[1];
  }
  public b(): number {
    return this.vector[2];
  }

  public add(other: Vec3): Vec3 {
    const x = this.x() + other.x();
    const y = this.y() + other.y();
    const z = this.z() + other.z();

    return new Vec3(x, y, z);
  }

  public subtract(other: Vec3): Vec3 {
    const x = this.x() - other.x();
    const y = this.y() - other.y();
    const z = this.z() - other.z();

    return new Vec3(x, y, z);
  }

  public multiply(other: Vec3): Vec3 {
    const x = this.x() * other.x();
    const y = this.y() * other.y();
    const z = this.z() * other.z();

    return new Vec3(x, y, z);
  }

  public multiply_scalar(other: number): Vec3 {
    const x = this.x() * other;
    const y = this.y() * other;
    const z = this.z() * other;

    return new Vec3(x, y, z);
  }

  public divide(other: Vec3): Vec3 {
    const x = this.x() / other.x();
    const y = this.y() / other.y();
    const z = this.z() / other.z();

    return new Vec3(x, y, z);
  }

  public divide_scalar(other: number): Vec3 {
    const x = this.x() / other;
    const y = this.y() / other;
    const z = this.z() / other;

    return new Vec3(x, y, z);
  }

  public squared_length(): number {
    const x = this.x();
    const y = this.y();
    const z = this.z();

    return x * x + y * y + z * z;
  }

  public length(): number {
    const x = this.x();
    const y = this.y();
    const z = this.z();

    return Math.sqrt(this.squared_length());
  }

  public make_unit_vector(): void {
    const unit = 1.0 / this.length();
    this.vector[0] *= unit;
    this.vector[1] *= unit;
    this.vector[2] *= unit;
  }

  public dot(other: Vec3): number {
    return this.x() * other.x() + this.y() * other.y() + this.z() * other.z();
  }

  public cross(other: Vec3): Vec3 {
    const x = this.y() * other.z() - this.z() * other.y();
    const y = this.z() * other.x() - this.x() * other.z();
    const z = this.x() * other.y() - this.y() * other.x();

    return new Vec3(x, y, z);
  }

  public log(): void {
    console.log(`Vector [x: ${this.x()}, y: ${this.y()}, z: ${this.z()}]`);
  }
}
