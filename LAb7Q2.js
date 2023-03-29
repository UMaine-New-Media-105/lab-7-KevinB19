let cS = 20;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //name tile
  background("black");

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 9; k++) {
        fill(cS * 4 * i, cS * 2 * j, cS * 4 * k);
        rect(j * 80, i * 80, 80);
      }
    }
  }
}
