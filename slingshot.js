class slingshot{
   constructor(bodyA,pointB){
   var options={
        bodyA:bodyA,
       pointB:pointB,
        length:10,
        stiffness:0.01,
    }
    this.bodyA=bodyA;
    this.pointB=pointB;
    this.slingshot=Constraint.create(options);
    World.add(world,this.slingshot);

   }
attach(bodyA){
this.slingshot.bodyA=bodyA;

}

fly(){
this.slingshot.bodyA=null;
}

display(){
    if(this.slingshot.bodyA){
    strokeWeight(3) ;
line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)

    }
}
}