class BaseClass{
    constructor(x,y,radius,angle) {
        var options = {
            'restitution':0.8,
            'friction':0.98,
            'density':5.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("BLACK");
        ellipseMode(CENTER);
        ellipse(0, 0, 25,25);
        
        pop();
      }
}