
function setup() 
{
  createCanvas(400, 400);
box1= new Box(100,200,50,70,0,0.5);
box2=new Box (200,100,70,50,0,-0.5);
}


function draw() 
{
  background(220);
  box1.show()
  box2.show()
box1.up()
box2.up()
}

