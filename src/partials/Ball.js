import { SVG_NS, CIRCLE_COLOR, BOARD_WIDTH, BOARD_HEIGHT, PADDLE_WIDTH } from "../settings";

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
        const hitLeft = (this.x < 0);
        const hitRight = (this.x >  this.boardWidth);
        if (hitTop || hitBottom){
          this.vy *= -1;
        }
        const hitTopx = (this.x - this.radius <= 0);
        const hitBottomx = (this.x + this.radius >= this.boardWidth);
        if (hitTopx || hitBottomx){
          this.vx *= -1;
        }
        // if (hitLeft) {
        //   this.direction = 1;
        //     this.reset();
        // }
        // else if (hitRight) {
        //   this.direction = -1;
        //     this.reset();
        // }
        
   
    }

    paddleCollision(paddle1, paddle2){

        let hitWall = false;
        let  checkTop = false;
        let checkBottom = false;
        if (this.direction === 1) {
              const p2Walls =  paddle2.getCoordinates();
              hitWall = (this.x + this.radius >= p2Walls.left);
              checkTop= (this.y - this.radius  >= p2Walls.top);
              checkBottom = (this.y +  this.radius  <= p2Walls.bottom);
              if (hitWall && checkTop && checkBottom) {
                this.vx *= -1;
                this.direction  *= -1;
              }
        } else {
              const p1Walls =  paddle1.getCoordinates();
              hitWall = (this.x - this.radius <= p1Walls.right);
              checkTop = (this.y - this.radius  >= p1Walls.top);
              checkBottom = (this.y +  this.radius  <= p1Walls.bottom);
              if (hitWall && checkTop && checkBottom) {
                this.vx *= -1;
                this.direction  *= -1;
              }
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

    render(svg, paddle1, paddle2 ) {
        const circle = document.createElementNS(SVG_NS, "circle");
        
        circle.setAttributeNS(null, "cx", this.x);
        circle.setAttributeNS(null, "cy", this.y);
        circle.setAttributeNS(null, "r", this.radius);
        circle.setAttributeNS(null, "fill", CIRCLE_COLOR);
        
        svg.appendChild(circle);
        this.move();
        this.wallCollision();
        this.paddleCollision(paddle1, paddle2);
        
      //...
    }
  }