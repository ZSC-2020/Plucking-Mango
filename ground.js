class ground{
    constructor() {
        var options = {
          isStatic:true,
        }

        this.body = Bodies.rectangle(windowWidth/2,windowHeight-100, windowWidth, 50, options);
        this.width = windowWidth;
        this.height = 50;
        this.body=Bodies.rectangle(windowWidth/2,windowHeight-100,this.width,this.height,options);
        World.add(world, this.body);
      }
      display(){
        push();
        rectMode(CENTER);
        rect(windowWidth/2,windowHeight-100,this.width,this.height)
        pop();
      }
    }