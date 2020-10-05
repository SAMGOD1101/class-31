class Particle{
    constructor(x,y,r){

        var options={
            restitution:0.4

        }
    this.r=r;

    this.body=Bodies.circle(x,y,this.r,options);
    this.color=color(random(0,255)),color(random(0,255)),color(random(0,255))
    

    }
    
    display(){

        World.add=(world,this.body);
        var pos=this.body.position;
        var angle=this.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("this.color")
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

        for(var j=0; j<particle.length;j++){


            particle[j].display();
        
        
          }
   
    }
    
};