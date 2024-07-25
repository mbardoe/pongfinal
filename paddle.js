class Paddle {
  constructor(x) {
    this.y = height / 2;
    this.x = x;
    this.yvel = 0;
    this.radius = 20;
    this.thickness = 10;
  }

  show() {
    push();
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, this.thickness, this.radius * 2);

    pop();
  }

  move() {
    this.y += this.yvel;
    if (this.y < this.radius) {
      this.y = this.radius;
    }
    if (this.y > height - this.radius) {
      this.y = height - this.radius;
    }
  }
}
