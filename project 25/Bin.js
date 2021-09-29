class Bin {
    constructor(x,y) {

      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.width = 200;
      this.height = 213;
      this.thickness = 20;
      this.image = loadImage("images/dustbingreen.png");
      this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic: true});
      this.leftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic: true});
      this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic: true});
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
    }
    display(){
      var bottomPos = this.bottomBody.position;
      var leftPos = this.leftBody.position;
      var rightPos = this.rightBody.position;

      
      push();
      translate(leftPos.x,leftPos.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill("white");
      rotate(this.angle);
      pop();

      push();
      translate(rightPos.x,rightPos.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill("white");
      rotate(-1*this.angle);
      pop();

      push();
      translate(bottomPos.x,bottomPos.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill("white");
      imageMode(CENTER);
      image(this.image, 0, -this.height/2, this.width, this.height);
      pop();
    }
  };