class Cradle{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 220
        }
        this.pointB = pointB
        this.Cradle= Constraint.create(options);
        World.add(world, this.Cradle);
    }

      display(){
          if(this.Cradle.bodyA){
            var pointA = this.Cradle.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
        
    }
    
  }



