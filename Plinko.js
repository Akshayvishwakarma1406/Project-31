class Plinko{
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution:0.5
      }
      this.body = Bodies.circle(x,y,10,options);
    //   this.width = width;
    //   this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
    //   rect(pos.x, pos.y, this.width, this.height);
      ellipse(pos.x,pos.y,10,10);
    }
  }
