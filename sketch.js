var blower,blowermouth,ball;
var button;



function setup() {
  createCanvas(850,600);
 blower = createSprite(500,550,400,40);
  blowermouth = createSprite(750, 500, 150, 150);
  ball = createSprite(750,400,100,100);

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  drawSprites();

}
function blow () {
Matter.Body.applyForce(ball.Body,{x: 0, y: 0}, {x: 0, y: 0.05});
}

