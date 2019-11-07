import { SVG_NS, CIRCLE_COLOR, BOARD_WIDTH, BOARD_HEIGHT } from "../settings";

export default class Ball {
    constructor(boardWidth, boardHeight, radius) {
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.radius = radius;
      this.direction = 1;
      this.x = this.boardWidth/2;
      this.y = this.boardHeight/2;
      this.reset();
    }

    wallCollision() {
        const hitTop = (this.y - this.radius <= 0);
        const hitBottom = (this.y + this.radius >= this.boardHeight);

        if (hitTop || hitBottom){
          this.vy *= -1;
        }
   
    }

    move(){
      this.x  = this.x + this.vx;
      this.y  = this.y + this.vy;


    }

    reset(){

      this.x  =  this.boardWidth/2;
      this.y = this.boardHeight/2;
      this.vy = 0;
      while(this.vy === 0 ) {
          this.vy = Math.floor(Math.random() * 10 ) -5;
      }
      this.vx = this.direction * (6 - Math.abs(this.vy));

    }

    render(svg) {
        const circle = document.createElementNS(SVG_NS, "circle");
        
        circle.setAttributeNS(null, "cx", this.x);
        circle.setAttributeNS(null, "cy", this.y);
        circle.setAttributeNS(null, "r", this.radius);
        circle.setAttributeNS(null, "fill", CIRCLE_COLOR);
        
        svg.appendChild(circle);
        this.move();
        this.wallCollision();
        
      //...
    }
  }