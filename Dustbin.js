class Dustbin{
    constructor(){
        var options={
          isStatic:false,
          density:0.2
          }
        this.body=Matter.Bodies.rectangle(100, 100,20,50,options) 
         World.add(world,this.body);
    }
    display(){
        rect(this.body.position.x,this.body.position.y) 
    }
     
}