var thickness, wall;
var bullet,speed, weight;
function setup() {
  createCanvas(1600, 400);

  //random value
  thickness = random(22, 83);
  //bullet
  bullet = createSprite(400, 200, 100, 6);
  bullet.shapeColor = "white";
  //WALL
  wall = createSprite(1100, 200, thickness, height / 2);
  wall.shapeColor = color("gray");
  
  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;

}
function draw() {
  background("black");


  if (wall.x - bullet.x < (bullet.width+wall.width) / 2) {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 225090;
    if (deformation > 180) {
      bullet.shapeColor = "white";
    }
    if (deformation < 180 && deformation > 100) {
      bullet.shapeColor = "white";
    }
    if (deformation < 100) {
      bullet.shapeColor = "white";
    }
  }

  if (hasCollide(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = "red";
    }

    if (damage < 10) {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}

  function hasCollide(bullet, wall) {
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;
    if (bulletRightEdge >= wallLeftEdge) {
      return true;
    }
     return false;
  }


