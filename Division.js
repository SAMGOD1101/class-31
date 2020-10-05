class Division{
constructor(x,y,w,h)  {

    var options = {
        isStatic:true
    }

    this.body=Bodies.rectangle(x,y,w,h,options);

    this.w=w;
    this.h=h;
    


}
    display(){
        World.add(world,this.body);
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x,pos.y,this.w,this.h);

      for(var k=0;k<division.length;k++){

        division[k].display();
    
    
      }
 }

 
};


       








