const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var plinko;
var division;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
    ground=new Ground(10,760,460,20);
    plinko1=new Plinko(50,60,10);
    division=new Division()
}

function draw() {
  background(255,255,255);
  
  

  ground.display();
  

  for (var k=0;k<=width;k=k+80){

divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));


  }

        
  

 

  drawSprites();
} 