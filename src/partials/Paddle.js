import { SVG_NS, PADDLE_COLOR, KEYS, PADDLE_SPEED } from "../settings";

export default class Paddle {
    constructor(width, height, boardHeight, x, y, upKey, downKey) {
      this.width = width;
      this.height = height;
      this.boardHeight = boardHeight;
      this.x = x;
      this.y = y;
      this.score= 0;
      this.speed = PADDLE_SPEED;
      document.addEventListener("keydown", event => {
        switch (event.key) {
          case upKey:
            this.moveUp();
            break;
          case downKey:
            this.moveDown();
            break;
        }
      });
    }
    moveUp(){
        this.y = Math.max(this.y - this.speed, 0);
    }

    moveDown(){
        this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);


    }
    
    
    getCoordinates() {
      return {
        
        left: this.x,
        top: this.y,
        right: this.x + this.width,
        bottom: this.y + this.height
        
      };
    }
    
    increaseScore() {
      this.score = this.score +1;
    }
    
    setSpeed(speed) {
      this.speed = speed;

    }

    getScore() {
      return this.score;

    }

    render(svg) {
        const rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);
        rect.setAttributeNS(null, "x", this.x);
        rect.setAttributeNS(null, "y", this.y);
        rect.setAttributeNS(null, "fill", PADDLE_COLOR);
        
        svg.appendChild(rect);
        
      //...
    }
  }