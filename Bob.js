class Bob{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.1,
        'friction':0.9,
        'density':0.9
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("circle.png");
      World.add(world, this.body);
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0,90, 90);
      pop();
    }
}
