let cycloid, button;

function setup() {
  let size;
  if (windowWidth>windowHeight) {
    size = windowHeight;
  } else {
    size = windowWidth;
  }
  createCanvas(size, size);
  let r1 = 50;
  let r2 = (1/7) * r1
  rateSlider = createSlider(-20, 20, 0, 1);
  sizeSlider = createSlider(0, 2, 1, 0.01);
  rateSlider.position(130, size-30);
  sizeSlider.position(260, size-30);
  cycloid = new Cycloid(r1, r2);
  cycloid.drawCircle();
  button = createButton("Embed Cycloid");
  button.mousePressed(embed);
  button.position(20, size-30);
}

function embed() {
  cycloid.embedCycloid();
}

function windowResized() {
  let size;
  if (windowWidth>windowHeight) {
    size = windowHeight;
  } else {
    size = windowWidth;
  }
  resizeCanvas(size, size);
}

function draw() {
  background(1000);
  translate(width/2, height/2);
  let rate = rateSlider.value();
  let size = sizeSlider.value();
  cycloid.drawCycloid(rate, size);
  textAlign(LEFT);
  fill(0);
  text(rate, -width/2 + 20, -height/2 + 20);
  text(size, width/2 - 20, -height/2 + 20);
}