class Cycloid {
  constructor(r1, r2) {
    this.r1 = r1;
    this.r2 = r2;
    this.circle = [];
    this.cycloid = [];
    this.n = width
  }
  
  drawCircle() {
    let circle = [];
    let dt = TWO_PI/this.n
    for (let i = 0; i < this.n; i ++) {
      let x = this.r1*sin(i*dt);
      let y = this.r1*cos(i*dt);
      append(circle, {x:x, y:y});
    }
    this.circle = circle
  }
  
  drawCycloid(rate, size) {
    let cycloid = [];
    let dt = TWO_PI/this.n;
    noFill();
    strokeWeight(3);
    beginShape();
    for (let i = 0; i < this.n; i ++) {
      let x = (this.r2*sin(rate*i*dt)) + this.circle[i].x * size;
      let y = (this.r2*cos(rate*i*dt)) + this.circle[i].y * size;
      vertex(x,y);
      append(cycloid, {x:x, y:y});
    }
    endShape(CLOSE);
    this.cycloid = cycloid
  }
  
  embedCycloid() {
    this.circle = this.cycloid
  }
  
}