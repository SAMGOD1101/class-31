class Plinko{
    constructor(x,y,r){
          
      var options={
      isStatic:true,
      restitution:0,
      density:1
  
  
  
  }
  this.x=x;
  this.y=y;
  this.r=r;
  this.body = Bodies.circle(x,y,(this.r/2), options);
  
  }
  display(){
    World.add(world, this.body);
  var pos=this.body.position;
  push();
  translate(pos.x, pos.y);
  rectMode(CENTER);
  ellipse(0,0,this.r,this.r);
  pop();
  
  
  
  }
  
  
  }
  