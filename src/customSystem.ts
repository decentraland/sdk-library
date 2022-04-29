export class TimeSystem implements ISystem {
  time: number = 0

  update(dt: number): void {
    this.time += dt
  }
}