let blobs;

function setup() {
  createCanvas(900, 900);
  background(0);
  colorMode(HSB, 360, 100, 100);
  mic = new p5.AudioIn();
  mic.start();
  blobs = [];
  
}
function draw() {
  var vol = mic.getLevel()
  
 if (vol > 0.001) {
stroke(random(360), 100, 100);
strokeWeight(random(30));
         
stroke(random(255), random(255), random(255));
line (random(width), random(height),random(width),random(height)); 
    
    }
  
    
  if (vol > 0.01) {
    blobs.push(new MyObject());
  }
  blobs.forEach(blob => {
    blob.draw();
  });
  
}

class MyObject {
  
  constructor() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.s = random(width*0.1,width*0.3);
    this.cnt = 0;
    this.col = color(random(255),random(255),random(255));
    this. lifespan = random(60,260);
  }
  
  draw() {
    if(this.cnt<this.lifespan) {
    push();
    noStroke();
    translate(this.x, this.y);
    fill(this.col);
    ellipse(0,0,this.s);
    rect(-this.s*0.1,0,this.s*0.2,this.cnt, 20,20);
      
    rect(this.s*0.2,0,this.s*0.1,this.cnt*0.6, 20,20);
    pop();
    this.cnt++;
    }
  }
  
  
}

function keyReleased() {
  background(0);
  blobs = [];
}

// go to fullscreen
// copy lines below to add fullscreen toggle to
// your sketch. Notice that if you are already using
// the keyPressed function, add lines 20-22 to it.

function keyPressed() {
  if (key === "f" || key === "F") {
    enterFullscreen();
  }
  
    if (key == 's') {
    save("participant6.png");
  }
}

/* enter fullscreen-mode via
 * https://editor.p5js.org/kjhollentoo/sketches/H199a0c-x
 */
function enterFullscreen() {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function (event) {
  event.preventDefault();
};
