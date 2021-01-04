class Paper {
  constructor(){
    var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
      }
    this.body=Matter.Bodies.rectangle(100, 100,options) 
     World.add(world,this.body);
}
display(){
    rect(this.body.position.x,this.body.position.y) 
}
     }
    
    
    
    
