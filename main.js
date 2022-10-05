let video;

function setup(){
    colorMode(HSB)
    ellipseMode(CENTER)

    video = createCapture(VIDEO)
    hey = loadImage("yo.png")
    video.hide()
}

function draw(){
  createCanvas(screen.width / 2, 480)
  background('#3498DB');
  fill(25,210,255);
  noStroke();

  // Top Left
  ellipse(0,0,50)
  
  // Top Right
  ellipse(763, 0, 50)
  
  // Bottom Left
  ellipse(0, 478, 50)
  
  // Bottom Right
  ellipse(763, 478, 50)

  bruh = image(video, 220, 80, 350, 300)
}