class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    let angle = random(-70, 70);
    //let angle=0;
    this.vel = createVector(3, 0);
    this.vel.setHeading(angle);
    let side = random([1, -1]);
    this.vel.mult(side);
  }

  show() {
    push();
    strokeWeight(5);
    stroke(255);
    point(this.x, this.y);
    pop();
  }

  move() {
    this.x = this.x + this.vel.x;
    this.y = this.y + this.vel.y;
    if (this.y > height || this.y < 0) {
      this.vel.y *= -1;
    }
  }
}
