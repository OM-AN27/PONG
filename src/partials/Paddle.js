import { SVG_NS, PADDLE_COLOR } from "../settings";

export default class Paddle {
    constructor(width, height, boardHeight, x, y) {
      this.width = width;
      this.height = height;
      this.boardHeight = boardHeight;
      this.x = x;
      this.y = y;
      this.score= 0;
      this.speed = 10;
    

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