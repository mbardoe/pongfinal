class Game {
  constructor() {
    this.gameOver = false;
    this.board = new Board();
    this.paddle1 = new Paddle(10);
    this.paddle2 = new Paddle(width - 10);
    this.ball = new Ball();
    this.score1 = 0;
    this.score2 = 0;
    this.gamestart = false;
    this.gameopenning = true; // do we need the openning screen
    this.framestart = frameCount + 3 * 60;
  }

  show() {
    this.board.show(
      this.gameOver,
      this.gameopenning,
      this.framestart,
      this.score1,
      this.score2
    );
    this.paddle1.show();
    this.paddle2.show();
    this.paddleupdate();
    this.paddle1.move();
    this.paddle2.move();
    if (this.gamestart && !this.gameOver) {
      this.ball.show();
      this.update();
    } else {
      // should the game get started
      if (frameCount > this.framestart) {
        this.gamestart = true;
        this.gameopenning = false;
      }
    }
    // when the game is over let the spacebar restart the game.
    if (this.gameOver) {
      if (keyIsDown(32)) {
        this.gameOver = false;
        this.score1 = 0;
        this.score2 = 0;
        this.gamestart = false;
        this.gameopenning = true; // do we need the openning screen
        this.framestart = frameCount + 3 * 60;
      }
    }
  }

  update() {
    this.ball.move();
    this.checkpaddles();
    this.checkscore();
  }

  checkpaddles() {
    //check paddle1
    if (
      abs(this.ball.x - this.paddle1.x) < this.paddle1.thickness / 2 &&
      abs(this.ball.y - this.paddle1.y) < this.paddle1.radius
    ) {
      this.ball.vel.x *= -1;
      this.ball.x = this.paddle1.x + this.paddle1.thickness / 2;
      // everytime we hit the ball it goes faster
      this.ball.vel.mult(1.06);
      // everytime we hit the ball it goes in a slightly different direction
      let ballheading = this.ball.vel.heading();
      ballheading += random(-10, 10);
      this.ball.vel.setHeading(ballheading);
    }
    //check paddle2
    if (
      abs(this.ball.x - this.paddle2.x) < this.paddle1.thickness / 2 &&
      abs(this.ball.y - this.paddle2.y) < this.paddle1.radius
    ) {
      this.ball.vel.x *= -1;
      this.ball.x = this.paddle2.x - this.paddle2.thickness / 2;
      // everytime we hit the ball it goes faster
      this.ball.vel.mult(1.06);
      // everytime we hit the ball it goes in a slightly different direction
      let ballheading = this.ball.vel.heading();
      ballheading += random(-10, 10);
      this.ball.vel.setHeading(ballheading);
    }
  }
  checkscore() {
    if (this.ball.x < 0) {
      //it went off to the left
      this.score2 += 1;
      this.ball = new Ball();
      this.gamestart = false;
      this.framestart = frameCount + 180;
    }
    if (this.ball.x > width) {
      //it went off to the left
      this.score1 += 1;
      this.ball = new Ball();
      this.gamestart = false;
      this.framestart = frameCount + 180;
    }
    if (this.score1 >= 7 || this.score2 >= 7) {
      this.gameOver = true;
    }
  }
  paddleupdate() {
    // make paddle1 go up
    if (keyIsDown(87)) {
      this.paddle1.yvel = -5;
    }
    // make paddle1 go down
    else if (keyIsDown(83)) {
      this.paddle1.yvel = 5;
    }
    // make paddles stop
    else {
      this.paddle1.yvel = 0;
    }
    //this.paddle1.move();
    // make paddle2 go up
    if (keyIsDown(73)) {
      this.paddle2.yvel = -5;
    }
    // make paddle2 go down
    else if (keyIsDown(75)) {
      this.paddle2.yvel = 5;
    }
    // make paddles stop
    else {
      this.paddle2.yvel = 0;
    }
  }
}
