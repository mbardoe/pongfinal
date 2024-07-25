class Board {
  constructor() {}

  show(gameover, gameopenning, framestart, score1, score2) {
    // black background
    background(0);
    // make the net
    push();
    strokeWeight(4);
    stroke(255); // white strokes
    for (let ypos = 0; ypos < height; ypos += 30) {
      line(width / 2, ypos, width / 2, ypos + 15);
    }
    textSize(32);
    textAlign(CENTER);
    text(score1, width / 2 - 40, 40);
    text(score2, width / 2 + 40, 40);
    textAlign(CENTER);
    strokeWeight(2);
    // game over text
    if (gameover) {
      textSize(16);
      text("Game Over: press spacebar to restart.", width / 2, height / 2);
    }
    // An openning screen stating the keys for operation
    if (gameopenning) {
      if (frameCount < framestart - 60) {
        textSize(16);

        let mytext1 = "Player 1 uses 'w' and 's' keys.";
        let mytext2 = "Player 1 uses 'i' and 'k' keys.";
        let mytext3 = "Winner is the first to seven.";
        text(mytext1, width / 2, height / 2 - 30);
        text(mytext2, width / 2, height / 2);
        text(mytext3, width / 2, height / 2 + 30);
      }
    }
    pop();
  }
}
