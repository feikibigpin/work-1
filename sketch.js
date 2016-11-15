function setup() {
  createCanvas(720,480);
  background(150,150,150);
  strokeWeight(2);
  stroke(100,100,100);
}

function draw() {
  //cuello
  line(width/2,height/3,width/2,240);
  line(385,height/3,385,240);
  line(372.5,height/3,372.5,240);
  //antenas
  line(340,67,372.5,120);
  line(400,13,372.5,120);
  line(443,130,372.5,115);
  //cuerpo
  fill(100,100,100);
  noStroke();
  ellipse(width/2,374,70,70);
  fill(0,0,0);
  noStroke();
  rect(310,height/2,100,135);
  fill(100,100,100);
  noStroke();
  rect(310,260,100,7);
  //cabeza
  fill(0,0,0);
  noStroke();
  ellipse(372.5,115,100,100);
  //ojo
  fill(255,255,255);
  noStroke();
  ellipse(385,110,30,30);
  //punto negro del ojo
  fill(0,0,0);
  noStroke();
  ellipse(385,110,8,8);
  //lunares
  fill(100,100,100);
  noStroke();
  ellipse(width/2,106,10,10);
  ellipse(394,88,9,9);
  ellipse(403,122,6,6);
}