class tree{
    constructor(x, y) {
        var options = {
          isStatic:true,
        }
        this.body = Bodies.rectangle(x, y, 600, 500, options);
        this.width = 600;
        this.height = 600;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        image(this.image, 1000, 500, this.width, this.height);
        pop();
      }
    }