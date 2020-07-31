class Particle{
    constructor(x,y) {
      var options = {
          restitution:0.9
      }
      this.body = Bodies.circle(x,y,10,options);
      this.color = color(random(0,255),random(0,255),random(0,255));
    //   this.width = width;
    //   this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(this.color);
    //   rect(pos.x, pos.y, this.width, this.height);
      ellipse(pos.x,pos.y,10,10);
      pop();
    }
  }
